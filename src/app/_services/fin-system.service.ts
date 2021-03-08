import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericHttpService } from './genericHttpService';
import { FinSystem } from '../_models/fin-system-model';

@Injectable({ providedIn: 'root' })
export class FinSystemService extends GenericHttpService<FinSystem> {
private obj: FinSystem = new FinSystem();
    constructor(private http: HttpClient) {
        super(http);
    }

    getByFilter(filter: any) {
      return this.postAll('finSystem/filter', filter);
    }

    save(entity) {
      return this.post('finSystem/save', entity);
   }

    deleteById(id) {
          return this.delete(`finSystem/${id}`);
    }

    set(obj: any) {
      this.obj = obj;
    }

    get(): any {
      return this.obj;
  }

}
