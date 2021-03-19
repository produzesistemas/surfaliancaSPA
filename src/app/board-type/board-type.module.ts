import { NgModule } from '@angular/core';
import { BoardTypeComponent } from './board-type.component';
import { SharedModule } from '../share.module';
import { BoardTypeRoutingModule} from './board-type-routing.module';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BoardTypeRoutingModule,
        NgbModule
      ],
    declarations: [
        BoardTypeComponent
    ],
    exports: [ BoardTypeComponent,
        FormsModule,
        ReactiveFormsModule ]
})
export class BoardTypeModule { }
