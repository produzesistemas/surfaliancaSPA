import { NgModule } from '@angular/core';
import { BoardModelFormComponent } from './board-model-form.component';
import { SharedModule } from 'src/app/share.module';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NgMultiSelectDropDownModule.forRoot()
      ],
    declarations: [
        BoardModelFormComponent
    ],
    exports: [ BoardModelFormComponent,
        FormsModule,
        ReactiveFormsModule ]
})
export class BoardModelFormModule { }
