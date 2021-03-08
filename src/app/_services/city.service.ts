import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GenericHttpService } from './genericHttpService';
import { City } from 'src/app/_models/city';

@Injectable({ providedIn: 'root' })
export class CityService extends GenericHttpService<any>{
    protected baseUrl = `${environment.urlApi}`;

    constructor(private http: HttpClient) {
        super(http);
    }

    getByFilter(filter: City) {
        return this.postAll('city/getByFilter', filter);
    }


}

