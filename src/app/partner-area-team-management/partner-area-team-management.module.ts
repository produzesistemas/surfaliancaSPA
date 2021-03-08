import { NgModule } from '@angular/core';
import { PartnerAreaTeamManagementComponent } from './partner-area-team-management.component';
import { SharedModule } from '../share.module';
import { PartnerAreaTeamManagementRoutingModule} from './partner-area-team-management-routing.module';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PartnerAreaTeamManagementRoutingModule,
        NgbModule
      ],
    declarations: [
        PartnerAreaTeamManagementComponent
    ],
    exports: [ PartnerAreaTeamManagementComponent,
        FormsModule,
        ReactiveFormsModule ]
})
export class PartnerAreaTeamManagementModule { }
