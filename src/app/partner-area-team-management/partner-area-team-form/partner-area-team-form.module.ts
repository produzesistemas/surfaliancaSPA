import { NgModule } from '@angular/core';
import { PartnerAreaTeamFormComponent } from './partner-area-team-form.component';
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
        PartnerAreaTeamFormComponent
    ],
    exports: [ PartnerAreaTeamFormComponent,
        FormsModule,
        ReactiveFormsModule ]
})
export class PartnerAreaTeamFormModule { }
