import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexManagementComponent } from './index-management.component';

const routes: Routes = [
    {
        path: '',
        component: IndexManagementComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IndexManagementRoutingModule { }
