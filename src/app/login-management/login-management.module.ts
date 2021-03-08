import { NgModule } from '@angular/core';
import { LoginComponent } from './login-management.component';
import { SharedModule } from '../share.module';
import { LoginManagementRoutingModule} from '../login-management/login-management-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        LoginManagementRoutingModule
      ],
    declarations: [
        LoginComponent    ],
    exports: [ LoginComponent ]
})
export class LoginManagementModule { }
