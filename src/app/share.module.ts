import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RouterModule } from '@angular/router';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);



@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),

  ],
  declarations: [
  ],
  providers: [
    BsModalService,
    BsModalRef,
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  entryComponents: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
  ]
})
export class SharedModule { }
