import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { AuthenticationService } from '../_services/authentication.service';
import { ApplicationUser } from 'src/app/_models/application-user';

@Component({
    selector: 'app-login-management',
    templateUrl: './login-management.component.html'
})

export class LoginComponent implements OnInit {

    form: FormGroup;
    public submitted = false;
    public parent;
    private applicationUser: ApplicationUser = new ApplicationUser();

    constructor( private toastr: ToastrService,
                 private spinner: NgxSpinnerService,
                 private router: Router,
                 private authenticationService: AuthenticationService,
                 private route: ActivatedRoute,
                 private formBuilder: FormBuilder,
                 private authService: SocialAuthService) {
    }

    ngOnInit() {

    if (this.authenticationService.getCurrentUser()) {
        this.router.navigate(['partnerArea']);
    }

    this.route.params.subscribe(params => {
            if (params.id === '1') {
                this.parent = 1;
            }
        });

    this.form = this.formBuilder.group({
            email: ['', Validators.required],
            secret: ['', Validators.required]
        });
    }

    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        const formControls = this.form.controls;
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(socialuser => {
        this.authenticationService.clearUser();
        const user = new ApplicationUser();
        user.email = socialuser.email;
        user.emailConfirmed = true;
        user.phoneNumberConfirmed = false;
        user.userName = socialuser.firstName;
        user.provider = 'GOOGLE';
        user.providerId = socialuser.id;
        this.authenticationService.registerPartner(user)
        .subscribe(
        result => {
            this.authenticationService.addCurrenUser(result);
            this.router.navigate(['partnerArea']);
        }
        );


    });
  }

}

