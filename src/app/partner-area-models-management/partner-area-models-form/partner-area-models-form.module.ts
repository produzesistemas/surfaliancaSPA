import { NgModule } from '@angular/core';
import { PartnerAreaModelsFormComponent } from './partner-area-models-form.component';
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
        PartnerAreaModelsFormComponent
    ],
    exports: [ PartnerAreaModelsFormComponent,
        FormsModule,
        ReactiveFormsModule ]
})
export class PartnerAreaModelsFormModule { }
