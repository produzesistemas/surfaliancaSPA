import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnerAreaTeamManagementComponent } from './partner-area-team-management.component';
import { PartnerAreaTeamFormComponent } from './partner-area-team-form/partner-area-team-form.component';
import { PartnerAreaTeamFormModule } from 'src/app/partner-area-team-management/partner-area-team-form/partner-area-team-form.module';

const routes: Routes = [
    {
        path: '',
        component: PartnerAreaTeamManagementComponent
    },
    {
        path: ':id/:isEdit',
        component: PartnerAreaTeamFormComponent,
        children: [
            { path: 'partnerAreaTeamForm', loadChildren: () => PartnerAreaTeamFormModule },
          ]
      },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PartnerAreaTeamManagementRoutingModule { }
