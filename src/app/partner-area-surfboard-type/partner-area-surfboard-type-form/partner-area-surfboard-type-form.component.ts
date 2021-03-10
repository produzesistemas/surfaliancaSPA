import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SurfboardType } from 'src/app/_models/surfboard-type-model';
import { SurfboardTypeService } from 'src/app/_services/surfboard-type.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-partner-area-surfboard-type-form',
  templateUrl: './partner-area-surfboard-type-form.component.html'
})
export class PartnerAreaSurfboardTypeFormComponent implements OnInit {
    formAdd: FormGroup;
  submitted = false;
  public surfboardType: SurfboardType = new SurfboardType();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private surfboardTypeService: SurfboardTypeService
  ) { }

  get q() { return this.formAdd.controls; }

  ngOnInit() {
    this.formAdd = this.formBuilder.group({
      id: [0],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    });

    this.route.params.subscribe(params => {
      if (params.id > 0) {
        this.surfboardType.id = Number(params.id);
        this.load();
      }
    });


    }

    load() {
      if (this.surfboardType.id > 0) {
        this.surfboardTypeService.getById(this.surfboardType.id).subscribe(result => {
          this.surfboardType = result;
          this.formAdd.controls.id.setValue(this.surfboardType.id);
          this.formAdd.controls.name.setValue(this.surfboardType.name);
            });
      }

    }

    onSave() {
      this.submitted = true;
      if (this.formAdd.invalid) {
        return;
      }
      const model = new SurfboardType(this.formAdd.value);
      this.surfboardTypeService.save(model).subscribe(result => {
        this.toastr.success('Registro efetuado com sucesso!');
        this.router.navigate(['/partner-area-surfboard-type']);
    });
    }

    onCancel() {
        this.router.navigate(['/partner-area-surfboard-type']);
    }

}

