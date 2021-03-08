import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GenericHttpService } from './genericHttpService';
import { ApplicationUser } from 'src/app/_models/application-user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends GenericHttpService<any>{
    protected baseUrl = `${environment.urlApi}`;
    protected baseSite = `${environment.urlApi}`;
    // private currentUserSubject: BehaviorSubject<any>;
    public currentUser: BehaviorSubject<any>;

    constructor(private http: HttpClient) {
        super(http);
        this.currentUser = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('surfalianca_user')));
        // this.currentUser = this.currentUserSubject.asObservable();
    }

    registerPartner(user: ApplicationUser) {
        return this.postAll('account/registerPartner', user);
    }

    logout() {
        localStorage.removeItem('surfalianca_user');
        this.currentUser.next(null);
    }

    addCurrenUser(user) {
        localStorage.setItem('surfalianca_user', JSON.stringify(user));
    }

    clearUser() {
        localStorage.removeItem('surfalianca_user');
    }



    getCurrentUser() {
        return new BehaviorSubject<any>(JSON.parse(localStorage.getItem('surfalianca_user'))).getValue();
    }

}
