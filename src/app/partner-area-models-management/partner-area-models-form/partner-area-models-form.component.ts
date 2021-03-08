import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/_models/product-model-model';
import { ProductModelService } from 'src/app/_services/product-model.service';
import { ToastrService } from 'ngx-toastr';

import * as moment from 'moment';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-partner-area-models-form',
  templateUrl: './partner-area-models-form.component.html'
})
export class PartnerAreaModelsFormComponent implements OnInit {
    formAdd: FormGroup;
  submitted = false;
  // public isEdit = false;
  // public isEditQuotation = false;
  // public isView = false;
  // public isNew = false;
  public productModel: ProductModel = new ProductModel();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private productModelService: ProductModelService
  ) { }

  get q() { return this.formAdd.controls; }

  ngOnInit() {
    this.route.params.subscribe(params => {
        if (params.isEdit === '0') {
        //   this.isEdit = true;
        }
        if (params.isEdit === '1') {
          this.productModel = this.productModelService.get();
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
      this.formAdd.controls.id.setValue(this.productModel.id);
      this.formAdd.controls.name.setValue(this.productModel.name);
      this.formAdd.controls.details.setValue(this.productModel.details);
    }

    onSave() {
      this.submitted = true;
      if (this.formAdd.invalid) {
        return;
      }
      const productModel = new ProductModel(this.formAdd.value);
      this.productModelService.save(productModel).subscribe(result => {
        this.toastr.success('Registro efetuado com sucesso!');
        this.router.navigate(['/partnerAreaModels']);
    });
    }

    onCancel() {
      this.router.navigate([`/partnerAreaModels`]);
    }

}

