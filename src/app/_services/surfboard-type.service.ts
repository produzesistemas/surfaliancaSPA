import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericHttpService } from './genericHttpService';
import { SurfboardType } from '../_models/surfboard-type-model';

@Injectable({ providedIn: 'root' })
export class SurfboardTypeService extends GenericHttpService<SurfboardType> {
    constructor(private http: HttpClient) {
        super(http);
    }

    getByFilter(filter: any) {
      return this.postAll('boardType/filter', filter);
    }

    save(entity) {
      return this.post('boardType/save', entity);
   }

    deleteById(id) {
          return this.delete(`boardType/${id}`);
    }

    getById(id: any) {
      return this.http.get<SurfboardType>(`${this.getUrlApi()}boardType/${id}`);
  }

}
