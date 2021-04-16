import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GenericHttpService } from './genericHttpService';
import { Shaper } from '../_models/shaper-model';

@Injectable({ providedIn: 'root' })
export class ShaperService extends GenericHttpService<Shaper>{
    protected baseUrl = `${environment.urlApi}`;

    constructor(private http: HttpClient) {
        super(http);
    }

    getByFilter(filter: any) {
        return this.postAll('Shaper/filter', filter);
      }
  
      save(store: FormData) {
        return this.post('shaper/save', store);
    }
  
      deleteById(id) {
            return this.delete(`Shaper/${id}`);
      }
  
      getById(id: any) {
        return this.http.get<Shaper>(`${this.getUrlApi()}Shaper/${id}`);
    }

}

