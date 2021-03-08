import { NgModule } from '@angular/core';
import { PartnerAreaModelsManagementComponent } from './partner-area-models-management.component';
import { SharedModule } from '../share.module';
import { PartnerAreaModelsManagementRoutingModule} from './partner-area-models-management-routing.module';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PartnerAreaModelsManagementRoutingModule,
        NgbModule
      ],
    declarations: [
        PartnerAreaModelsManagementComponent
    ],
    exports: [ PartnerAreaModelsManagementComponent,
        FormsModule,
        ReactiveFormsModule ]
})
export class PartnerAreaModelsManagementModule { }
