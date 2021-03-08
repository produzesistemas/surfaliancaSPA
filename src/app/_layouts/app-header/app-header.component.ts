import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent implements OnInit {

  public menus: any[];
  public currentUser;
  constructor(  private authenticationService: AuthenticationService,
                private router: Router) { }

  ngOnInit() {
    this.currentUser = this.authenticationService.getCurrentUser();
    // this.menus = [
    //   {
    //     label: 'Configurações',
    //     url: 'partnerAreaStore',
    //     icon: 'fa fa-cog',
    //   },
    //   {
    //     label: 'Dashboard',
    //     url: 'partnerArea',
    //     icon: 'fa fa-tachometer-alt',
    //   },
    //   {
    //     label: 'Modelos',
    //     url: 'partnerAreaModels',
    //     icon: 'fa fa-clipboard-list',
    //   },
    //   {
    //     label: 'Sistema de quilhas',
    //     url: 'partnerAreaFinSystem',
    //     icon: 'fa fa-compass',
    //   }
    // ];

  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['index']);
  }

}
