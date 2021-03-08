import { NgModule } from '@angular/core';
import { PartnerAreaSurfboardTypeFormComponent } from './partner-area-surfboard-type-form.component';
import { SharedModule } from 'src/app/share.module';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule
      ],
    declarations: [
        PartnerAreaSurfboardTypeFormComponent
    ],
    exports: [ PartnerAreaSurfboardTypeFormComponent,
        FormsModule,
        ReactiveFormsModule ]
})
export class PartnerAreaSurfboardTypeFormModule { }
