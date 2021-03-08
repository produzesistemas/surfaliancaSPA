import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnerAreaStoreManagementComponent } from './partner-area-store-management.component';

const routes: Routes = [
    {
        path: '',
        component: PartnerAreaStoreManagementComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PartnerAreaStoreManagementRoutingModule { }
