import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexManagementModule } from './index-management/index-management.module';
import { LoginManagementModule } from './login-management/login-management.module';
import { PartnerAreaManagementModule } from 'src/app/partner-area-management/partner-area-management.module';
import { PartnerAreaModelsManagementModule } from 'src/app/partner-area-models-management/partner-area-models-management.module';
import { PartnerAreaFinSystemManagementModule } from 'src/app/parter-area-fin-system-management/parter-area-fin-system-management.module';
import { PartnerAreaTeamManagementModule } from 'src/app/partner-area-team-management/partner-area-team-management.module';
import { PartnerAreaStoreManagementModule } from 'src/app/partner-area-store-management/partner-area-store-management.module';
import { StoreLayoutComponent } from 'src/app/_layouts/store-layout/store-layout.component';
import { AppLayoutComponent } from 'src/app/_layouts/app-layout/app-layout.component';
import { PartnerAreaSurfboardTypeModule } from './partner-area-surfboard-type/partner-area-surfboard-type.module';

const routes: Routes = [
{
  path: '',
  component: StoreLayoutComponent,
  children: [
    { path: '', redirectTo: 'index', pathMatch: 'full'},
    { path: 'index', loadChildren: () => IndexManagementModule },
    { path: 'login', loadChildren: () => LoginManagementModule }
  ]
},
{
  path: '',
  component: AppLayoutComponent,
  children: [
    { path: 'partnerArea', loadChildren: () => PartnerAreaManagementModule },
    { path: 'partnerAreaModels', loadChildren: () => PartnerAreaModelsManagementModule },
    { path: 'partnerAreaStore', loadChildren: () => PartnerAreaStoreManagementModule },
    { path: 'partnerAreaFinSystem', loadChildren: () => PartnerAreaFinSystemManagementModule },
    { path: 'partnerAreaTeam', loadChildren: () => PartnerAreaTeamManagementModule },
    { path: 'partner-area-surfboard-type', loadChildren: () => PartnerAreaSurfboardTypeModule },


  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
