import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Construction } from 'src/app/_models/construction-model';
import { ConstructionService } from 'src/app/_services/construction.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-construction-form',
  templateUrl: './construction-form.component.html'
})
export class ConstructionFormComponent implements OnInit {
  formAdd: FormGroup;
  submitted = false;
  public construction: Construction = new Construction();
  hasSelected: any;
  colors: any;
  @ViewChild('selectAll') private selectAll: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private constructionService: ConstructionService
  ) { }

  get q() { return this.formAdd.controls; }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id > 0) {
        this.construction.id = Number(params.id);
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
    if (this.construction.id > 0) {
      this.constructionService.getById(this.construction.id).subscribe(result => {
        this.construction = result;
        this.formAdd.controls.id.setValue(this.construction.id);
        this.formAdd.controls.name.setValue(this.construction.name);
        this.formAdd.controls.details.setValue(this.construction.details);
      });
    }

  }

  onSave() {
    this.submitted = true;
    if (this.formAdd.invalid) {
      return;
    }
    const finSystem = new Construction(this.formAdd.value);
    this.constructionService.save(finSystem).subscribe(result => {
      this.toastr.success('Registro efetuado com sucesso!');
      this.router.navigate(['/construction']);
    });
  }

  onCancel() {
    this.router.navigate([`/construction`]);
  }

}

