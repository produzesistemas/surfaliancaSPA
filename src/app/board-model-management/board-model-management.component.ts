import { Component, OnInit, TemplateRef, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { environment } from '../../environments/environment';
import { FilterDefaultModel } from '../_models/filter-default-model';
import { ProductModel } from '../_models/product-model-model';
import { ProductModelService } from 'src/app/_services/product-model.service';
// import { PartnerAreaModelsFormComponent } from './partner-area-models-form/partner-area-models-form.component';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ConfirmationDialogService } from '../_shared-component/confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-board-model-management',
  templateUrl: './board-model-management.component.html'
})

export class BoardModelManagementComponent implements OnInit {
  modalRef: BsModalRef;
  modalDelete: BsModalRef;
  form: FormGroup;
  formAdd: FormGroup;
  loading = false;
  submitted = false;
  lstModels = [];
  isNew = false;
  productModel: any;
  @Output() action = new EventEmitter();
  page = 1;
  pageSize = 5;

  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authenticationService: AuthenticationService,
    private productModelService: ProductModelService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['']
    });
    this.onSubmit();
  }

  get f() { return this.form.controls; }

  onSubmit() {
    const filter: FilterDefaultModel = new FilterDefaultModel();
    filter.name = this.form.controls.name.value;
    this.productModelService.getByFilter(filter).subscribe(
      data => {
        this.lstModels = data;
      }
    );
  }

  onNew() {
    this.router.navigate([`/board-model/0`]);
  }

  edit(obj: ProductModel) {
    this.productModelService.set(obj);
    this.router.navigate([`/board-model/1`]);
  }

  deleteById(template: TemplateRef<any>, productModel: ProductModel) {
    this.productModel = productModel;
    this.modalDelete = this.modalService.show(template, { class: 'modal-md' });
  }

  confirmDelete() {
    this.productModelService.deleteById(this.productModel.id).subscribe(() => {
      const index: number = this.lstModels.indexOf(this.productModel);
      if (index !== -1) {
        this.lstModels.splice(index, 1);
      }
      this.closeDelete();
      this.toastr.success('Excluído com sucesso', '');
    });
  }

  closeDelete() {
  this.modalDelete.hide();
  }



}
