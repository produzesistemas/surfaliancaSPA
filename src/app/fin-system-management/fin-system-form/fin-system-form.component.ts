import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FinSystem } from 'src/app/_models/fin-system-model';
import { FinSystemService } from 'src/app/_services/fin-system.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fin-system-form',
  templateUrl: './fin-system-form.component.html'
})
export class FinSystemFormComponent implements OnInit {
    formAdd: FormGroup;
  submitted = false;
  public finSystem: FinSystem = new FinSystem();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private finSystemService: FinSystemService
  ) { }

  get q() { return this.formAdd.controls; }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id > 0) {
        this.finSystem.id = Number(params.id);
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
      if (this.finSystem.id > 0) {
        this.finSystemService.getById(this.finSystem.id).subscribe(result => {
          this.finSystem = result;
          this.formAdd.controls.id.setValue(this.finSystem.id);
          this.formAdd.controls.name.setValue(this.finSystem.name);
          this.formAdd.controls.details.setValue(this.finSystem.details);
                });
      }

    }

    onSave() {
      this.submitted = true;
      if (this.formAdd.invalid) {
        return;
      }
      const finSystem = new FinSystem(this.formAdd.value);
      this.finSystemService.save(finSystem).subscribe(result => {
        this.toastr.success('Registro efetuado com sucesso!');
        this.router.navigate(['/fin-system']);
    });
    }

    onCancel() {
      this.router.navigate([`/fin-system`]);
    }

}

