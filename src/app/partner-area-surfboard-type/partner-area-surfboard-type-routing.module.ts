import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnerAreaSurfboardTypeComponent } from './partner-area-surfboard-type.component';
import { PartnerAreaSurfboardTypeFormComponent } from './partner-area-surfboard-type-form/partner-area-surfboard-type-form.component';
import { PartnerAreaSurfboardTypeFormModule } from './partner-area-surfboard-type-form/partner-area-surfboard-type-form.module';

const routes: Routes = [
    {
        path: '',
        component: PartnerAreaSurfboardTypeComponent
    },
    {
        path: ':id/:isEdit',
        component: PartnerAreaSurfboardTypeFormComponent,
        children: [
            { path: 'partner-area-surfboard-type-form', loadChildren: () => PartnerAreaSurfboardTypeFormModule },
          ]
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PartnerAreaSurfboardTypeRoutingModule { }
