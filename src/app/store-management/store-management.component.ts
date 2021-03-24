import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Store } from '../_models/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StoreService } from '../_services/store.service';
import { AuthenticationService } from '../_services/authentication.service';
import { NgxViacepService } from '@brunoc/ngx-viacep';


@Component({
    selector: 'app-store-management',
    templateUrl: './store-management.component.html'
})

export class StoreManagementComponent implements OnInit {
    public currentUser;
    form: FormGroup;
    formAddress: FormGroup;
    formFileUpload: FormGroup;
    fileToUpload: File = null;
    @ViewChild('file') uploadedFile: HTMLInputElement;

    uploaded = false;
    logo: any;
    public submitted = false;
    public submittedCep = false;
    public store: any;
    public file: any;
    constructor( private toastr: ToastrService,
                 private router: Router,
                 private formBuilder: FormBuilder,
                 private authenticationService: AuthenticationService,
                 private storeService: StoreService,
                 private viacep: NgxViacepService
                 ) {
    }

    ngOnInit() {
      this.form = this.formBuilder.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        cnpj: ['', Validators.required],
        contact: ['', Validators.required],
        phone: ['', Validators.required],
        exchangePolicy: [''],
        deliveryPolicy: [''],
        valueMinimum: ['', Validators.required],
        street: ['', Validators.required],
        district: ['', Validators.required],
        nameCity: ['', Validators.required],
        number: ['', Validators.required],
        cep: ['', Validators.required],
        id: [0]
      });

      this.currentUser = this.authenticationService.getCurrentUser();
      this.storeService.getByUser(this.currentUser).subscribe((result) => {
          this.store = result;
          if (this.store) {
            this.logo = environment.urlImagesLojas + this.store.imageName;
            this.load(result);
          }
});

      this.disableControls();

}

load(store: any) {
  this.form.controls.name.setValue(store.name);
  this.form.controls.description.setValue(store.description);
  this.form.controls.cnpj.setValue(store.cnpj);
  this.form.controls.contact.setValue(store.contact);
  this.form.controls.phone.setValue(store.phone);
  this.form.controls.exchangePolicy.setValue(store.exchangePolicy);
  this.form.controls.deliveryPolicy.setValue(store.deliveryPolicy);
  this.form.controls.valueMinimum.setValue(store.valueMinimum);
  this.form.controls.street.setValue(store.street);
  this.form.controls.nameCity.setValue(store.city.name);
  this.form.controls.district.setValue(store.district);
  this.form.controls.cep.setValue(store.cep);
  this.form.controls.number.setValue(store.number);
  this.form.controls.id.setValue(store.id);
}

get f() { return this.form.controls; }

onFileChange(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }

  onSubmit() {
    this.submitted = true;
    this.setValidatorsControls();
    if (this.form.invalid) {
        return;
    }

    const formData = new FormData();
    this.enableControls();
    this.store = new Store(this.form.value);
    if ((this.file === undefined) && (this.logo === undefined)){
      this.toastr.error('Selecione uma logomarca!');
      return;
    }
    formData.append('store', JSON.stringify(this.store));
    formData.append('file', this.file);
    this.storeService.save(formData).subscribe(result => {
      this.toastr.success('Registro efetuado com sucesso!');
      this.router.navigate(['partnerArea']);
  });
}

onCancel() {
  this.router.navigate([`/partnerArea`]);
}

onSearchLocation() {
  this.submitted = true;
  if (this.form.controls.cep.invalid) {
    this.clearValidatorsControls();
    return;
  }
  this.viacep.buscarPorCep(this.form.controls.cep.value).then(result => {
    if (result !== undefined) {
        this.setAddress(result);
    }
});

}

clearValidatorsControls() {
  this.form.controls.name.clearValidators();
  this.form.controls.name.updateValueAndValidity();
  this.form.controls.description.clearValidators();
  this.form.controls.description.updateValueAndValidity();
  this.form.controls.cnpj.clearValidators();
  this.form.controls.cnpj.updateValueAndValidity();
  this.form.controls.contact.clearValidators();
  this.form.controls.contact.updateValueAndValidity();
  this.form.controls.phone.clearValidators();
  this.form.controls.phone.updateValueAndValidity();
  this.form.controls.valueMinimum.clearValidators();
  this.form.controls.valueMinimum.updateValueAndValidity();
  this.form.controls.number.clearValidators();
  this.form.controls.number.updateValueAndValidity();
}

setValidatorsControls() {
  this.form.controls.name.setValidators(Validators.required);
  this.form.controls.name.updateValueAndValidity();
  this.form.controls.description.setValidators(Validators.required);
  this.form.controls.description.updateValueAndValidity();
  this.form.controls.cnpj.setValidators(Validators.required);
  this.form.controls.cnpj.updateValueAndValidity();
  this.form.controls.contact.setValidators(Validators.required);
  this.form.controls.contact.updateValueAndValidity();
  this.form.controls.phone.setValidators(Validators.required);
  this.form.controls.phone.updateValueAndValidity();
  this.form.controls.valueMinimum.setValidators(Validators.required);
  this.form.controls.valueMinimum.updateValueAndValidity();
  this.form.controls.number.setValidators(Validators.required);
  this.form.controls.number.updateValueAndValidity();
}

disableControls() {
  this.form.controls.street.disable();
  this.form.controls.district.disable();
  this.form.controls.nameCity.disable();
}

enableControls() {
  this.form.controls.street.enable();
  this.form.controls.district.enable();
  this.form.controls.nameCity.enable();
}

setAddress(endereco) {
  this.form.controls.street.setValue(endereco.logradouro);
  this.form.controls.district.setValue(endereco.bairro);
  this.form.controls.number.setValue(endereco.numero);
  this.form.controls.nameCity.setValue(endereco.localidade);
}

}
