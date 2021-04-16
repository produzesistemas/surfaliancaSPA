import { NgModule } from '@angular/core';
import { ShaperManagementComponent } from './shaper-management.component';
import { SharedModule } from '../share.module';
import { ShaperManagementRoutingModule} from './shaper-management-routing.module';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ShaperManagementRoutingModule,
        NgbModule
      ],
    declarations: [
        ShaperManagementComponent
    ],
    exports: [ ShaperManagementComponent,
        FormsModule,
        ReactiveFormsModule ]
})
export class ShaperManagementModule { }
