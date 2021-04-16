import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShaperManagementComponent } from './shaper-management.component';
import { ShaperFormComponent } from './shaper-form/shaper-form.component';
import { ShaperFormModule } from './shaper-form/shaper-form.module';

const routes: Routes = [
    {
        path: '',
        component: ShaperManagementComponent
    },
    {
        path: ':id/:isEdit',
        component: ShaperFormComponent,
        children: [
            { path: 'shaper-form', loadChildren: () => ShaperFormModule },
          ]
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShaperManagementRoutingModule { }
