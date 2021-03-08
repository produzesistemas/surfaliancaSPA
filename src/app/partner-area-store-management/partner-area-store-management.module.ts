import { NgModule } from '@angular/core';
import { PartnerAreaStoreManagementComponent } from './partner-area-store-management.component';
import { SharedModule } from '../share.module';
import { PartnerAreaStoreManagementRoutingModule} from './partner-area-store-management-routing.module';
import { CommonModule } from '@angular/common';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { NgxViacepModule } from '@brunoc/ngx-viacep';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        PartnerAreaStoreManagementRoutingModule,
        NgxMaskModule.forRoot(options),
        NgxViacepModule
      ],
    declarations: [
        PartnerAreaStoreManagementComponent
    ],
    exports: [ PartnerAreaStoreManagementComponent ]
})
export class PartnerAreaStoreManagementModule { }
