import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GenericHttpService } from './genericHttpService';
import { Store } from 'src/app/_models/store';
import { ApplicationUser } from 'src/app/_models/application-user';

@Injectable({ providedIn: 'root' })
export class StoreService extends GenericHttpService<any>{
    protected baseUrl = `${environment.urlApi}`;

    constructor(private http: HttpClient) {
        super(http);
    }

    getByUser(user: ApplicationUser) {
        return this.postAll('store/getByUser', user);
    }

    save(store: FormData) {
        return this.post('store/save', store);
    }

}

