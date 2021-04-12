import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-index-management',
    templateUrl: './index-management.component.html',
    styleUrls: ['./index-management.component.css']
})

export class IndexManagementComponent implements OnInit {

    constructor( private toastr: ToastrService,
                 private router: Router) {
                        }

    ngOnInit() {

    }

    // goPartnerArea() {
    //     return this.router.navigate(['/login-adm']);
    // }

}
