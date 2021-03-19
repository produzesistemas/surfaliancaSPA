import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardTypeComponent } from './board-type.component';
import { BoardTypeFormComponent } from './board-type-form/board-type-form.component';
import { BoardTypeFormModule } from './board-type-form/board-type-form.module';

const routes: Routes = [
    {
        path: '',
        component: BoardTypeComponent
    },
    {
        path: ':id/:isEdit',
        component: BoardTypeFormComponent,
        children: [
            { path: 'board-type-form', loadChildren: () => BoardTypeFormModule },
          ]
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BoardTypeRoutingModule { }
