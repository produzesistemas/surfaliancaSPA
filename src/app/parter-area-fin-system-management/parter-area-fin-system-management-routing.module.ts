import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnerAreaFinSystemManagementComponent } from './parter-area-fin-system-management.component';
import { PartnerAreaFinSystemFormComponent } from './parter-area-fin-system-form/parter-area-fin-system-form.component';
import { PartnerAreaFinSystemFormModule } from './parter-area-fin-system-form/parter-area-fin-system-form.module';

const routes: Routes = [
    {
        path: '',
        component: PartnerAreaFinSystemManagementComponent
    },
    {
        path: ':isEdit',
        component: PartnerAreaFinSystemFormComponent,
        children: [
            { path: 'partnerAreaModelForm', loadChildren: () => PartnerAreaFinSystemFormModule },
          ]
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PartnerAreaFinSystemManagementRoutingModule { }
