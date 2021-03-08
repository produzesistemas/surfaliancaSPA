import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnerAreaModelsManagementComponent } from './partner-area-models-management.component';
import { PartnerAreaModelsFormComponent } from './partner-area-models-form/partner-area-models-form.component';
import { PartnerAreaModelsFormModule } from 'src/app/partner-area-models-management/partner-area-models-form/partner-area-models-form.module';

const routes: Routes = [
    {
        path: '',
        component: PartnerAreaModelsManagementComponent
    },
    {
        path: ':isEdit',
        component: PartnerAreaModelsFormComponent,
        children: [
            { path: 'partnerAreaModelForm', loadChildren: () => PartnerAreaModelsFormModule },
          ]
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PartnerAreaModelsManagementRoutingModule { }
