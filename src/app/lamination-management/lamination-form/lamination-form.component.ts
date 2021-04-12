import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Lamination } from 'src/app/_models/lamination-model';
import { LaminationService } from 'src/app/_services/lamination.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lamination-form',
  templateUrl: './lamination-form.component.html'
})
export class LaminationFormComponent implements OnInit {
  formAdd: FormGroup;
  submitted = false;
  public lamination: Lamination = new Lamination();
  hasSelected: any;
  colors: any;
  @ViewChild('selectAll') private selectAll: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private laminationService: LaminationService
  ) { }

  get q() { return this.formAdd.controls; }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id > 0) {
        this.lamination.id = Number(params.id);
        this.load();
      }
    });

    this.formAdd = this.formBuilder.group({
      id: [0],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      details: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(500)]],
    });

    this.load();

  }

  load() {
    if (this.lamination.id > 0) {
      this.laminationService.getById(this.lamination.id).subscribe(result => {
        this.lamination = result;
        this.formAdd.controls.id.setValue(this.lamination.id);
        this.formAdd.controls.name.setValue(this.lamination.name);
        this.formAdd.controls.details.setValue(this.lamination.details);
      });
    }

  }

  onSave() {
    this.submitted = true;
    if (this.formAdd.invalid) {
      return;
    }
    const finSystem = new Lamination(this.formAdd.value);
    this.laminationService.save(finSystem).subscribe(result => {
      this.toastr.success('Registro efetuado com sucesso!');
      this.router.navigate(['/lamination']);
    });
  }

  onCancel() {
    this.router.navigate([`/lamination`]);
  }

}

