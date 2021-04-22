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
    if (!this.currentUser) {
      this.logout();
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['index']);
  }

}
