import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexManagementModule } from './index-management/index-management.module';
import { LoginManagementModule } from './login-management/login-management.module';
import { PartnerAreaManagementModule } from 'src/app/partner-area-management/partner-area-management.module';
import { FinSystemManagementModule } from 'src/app/fin-system-management/fin-system-management.module';
import { TeamManagementModule } from 'src/app/team-management/team-management.module';
import { StoreManagementModule } from 'src/app/store-management/store-management.module';
import { StoreLayoutComponent } from 'src/app/_layouts/store-layout/store-layout.component';
import { AppLayoutComponent } from 'src/app/_layouts/app-layout/app-layout.component';
import { LoginLayoutComponent } from 'src/app/_layouts/login-layout/login-layout.component';
import { BoardTypeManagementModule } from './board-type-management/board-type-management.module';
import { ConstructionManagementModule } from './construction-management/construction-management.module';
import { LaminationManagementModule } from './lamination-management/lamination-management.module';
import { LoginAdmManagementModule } from './login-adm-management/login-adm-management.module';
import { TailManagementModule } from './tail-management/tail-management.module';
import { ShaperManagementModule } from './shaper-management/shaper-management.module';
import { BoardModelManagementModule } from './board-model-management/board-model-management.module';
import { BottomManagementModule } from './bottom-management/bottom-management.module';


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
    { path: 'store', loadChildren: () => StoreManagementModule },
    { path: 'fin-system', loadChildren: () => FinSystemManagementModule },
    { path: 'team', loadChildren: () => TeamManagementModule },
    { path: 'board-type', loadChildren: () => BoardTypeManagementModule },
    { path: 'construction', loadChildren: () => ConstructionManagementModule },
    { path: 'lamination', loadChildren: () => LaminationManagementModule },
    { path: 'tail', loadChildren: () => TailManagementModule },
    { path: 'shaper', loadChildren: () => ShaperManagementModule },
    { path: 'board-model', loadChildren: () => BoardModelManagementModule },
    { path: 'bottom', loadChildren: () => BottomManagementModule },


  ]
},
{
  path: '',
  component: LoginLayoutComponent,
  children: [
    { path: 'login-adm', loadChildren: () => LoginAdmManagementModule }
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
