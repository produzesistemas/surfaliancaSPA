import { NgModule } from '@angular/core';
import { PartnerAreaFinSystemManagementComponent } from './parter-area-fin-system-management.component';
import { SharedModule } from '../share.module';
import { PartnerAreaFinSystemManagementRoutingModule} from './parter-area-fin-system-management-routing.module';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PartnerAreaFinSystemManagementRoutingModule,
        NgbModule
      ],
    declarations: [
        PartnerAreaFinSystemManagementComponent
    ],
    exports: [ PartnerAreaFinSystemManagementComponent,
        FormsModule,
        ReactiveFormsModule ]
})
export class PartnerAreaFinSystemManagementModule { }
