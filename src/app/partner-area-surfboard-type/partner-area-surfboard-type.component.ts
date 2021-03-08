import { Component, OnInit, TemplateRef, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { SurfboardType } from '../_models/surfboard-type-model';
import { FilterDefaultModel } from '../_models/filter-default-model';
import { SurfboardTypeService } from 'src/app/_services/surfboard-type.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-partner-area-surfboard-type',
  templateUrl: './partner-area-surfboard-type.component.html'
})

export class PartnerAreaSurfboardTypeComponent implements OnInit {
  modalRef: BsModalRef;
  modalDelete: BsModalRef;
  form: FormGroup;
  submitted = false;
  lst = [];
  surfboardType: any;
  page = 1;
  pageSize = 5;

  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private surfboardTypeService: SurfboardTypeService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['']
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    const filter: FilterDefaultModel = new FilterDefaultModel();
    filter.name = this.form.controls.name.value;
    this.surfboardTypeService.getByFilter(filter).subscribe(
      data => {
        this.lst = data;
      }
    );
  }

  onNew() {
    this.router.navigate([`/partner-area-surfboard-type/0`]);
  }

  edit(obj: SurfboardType) {
    this.router.navigate([`/partner-area-surfboard-type/${obj.id}/1`]);
  }

  deleteById(template: TemplateRef<any>, surfboardType: SurfboardType) {
    this.surfboardType = surfboardType;
    this.modalDelete = this.modalService.show(template, { class: 'modal-md' });
  }

  confirmDelete() {
    this.surfboardTypeService.deleteById(this.surfboardType.id).subscribe(() => {
      const index: number = this.lst.indexOf(this.surfboardType);
      if (index !== -1) {
        this.lst.splice(index, 1);
      }
      this.closeDelete();
      this.toastr.success('Excluído com sucesso!', '');
    });
  }

  closeDelete() {
  this.modalDelete.hide();
  }

}

