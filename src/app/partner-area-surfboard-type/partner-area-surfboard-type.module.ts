import { NgModule } from '@angular/core';
import { PartnerAreaSurfboardTypeComponent } from './partner-area-surfboard-type.component';
import { SharedModule } from '../share.module';
import { PartnerAreaSurfboardTypeRoutingModule} from './partner-area-surfboard-type-routing.module';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PartnerAreaSurfboardTypeRoutingModule,
        NgbModule
      ],
    declarations: [
        PartnerAreaSurfboardTypeComponent
    ],
    exports: [ PartnerAreaSurfboardTypeComponent,
        FormsModule,
        ReactiveFormsModule ]
})
export class PartnerAreaSurfboardTypeModule { }
