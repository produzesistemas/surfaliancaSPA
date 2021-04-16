import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Shaper } from '../_models/shaper-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShaperService } from '../_services/shaper.service';
import { AuthenticationService } from '../_services/authentication.service';
import { FilterDefaultModel } from '../_models/filter-default-model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
    selector: 'app-shaper-management',
    templateUrl: './shaper-management.component.html'
})

export class ShaperManagementComponent implements OnInit {
    modalRef: BsModalRef;
    modalDelete: BsModalRef;
    form: FormGroup;
    loading = false;
    submitted = false;
    lst = [];
    shaper: any;
    constructor( private toastr: ToastrService,
                 private router: Router,
                 private formBuilder: FormBuilder,
                 private authenticationService: AuthenticationService,
                 private shaperService: ShaperService,
                 private modalService: BsModalService,
                 ) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: ['']
          });
      };

      get f() { return this.form.controls; }

      onSubmit() {
        const filter: FilterDefaultModel = new FilterDefaultModel();
        filter.name = this.form.controls.name.value;
        this.shaperService.getByFilter(filter).subscribe(
          data => {
            this.lst = data;
          }
        );
      }

      onNew() {
        this.router.navigate([`/shaper/0/0`]);
      }
    
      edit(obj: Shaper) {
        this.router.navigate([`/shaper/${obj.id}/1`]);
      }
    
      deleteById(template: TemplateRef<any>, shaper: Shaper) {
        this.shaper = shaper;
        this.modalDelete = this.modalService.show(template, { class: 'modal-md' });
      }
    
      confirmDelete() {
        this.shaperService.deleteById(this.shaper.id).subscribe(() => {
          const index: number = this.lst.indexOf(this.shaper);
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
