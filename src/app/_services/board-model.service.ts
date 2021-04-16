import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericHttpService } from './genericHttpService';
import { BoardModel } from '../_models/board-model-model';

@Injectable({ providedIn: 'root' })
export class BoardModelService extends GenericHttpService<BoardModel> {
    constructor(private http: HttpClient) {
        super(http);
    }

    getByFilter(filter: any) {
      return this.postAll('boardModel/filter', filter);
    }

    save(entity) {
      return this.post('boardModel/save', entity);
   }

    deleteById(id) {
          return this.delete(`boardModel/${id}`);
    }

    getById(id: any) {
      return this.http.get<BoardModel>(`${this.getUrlApi()}boardModel/${id}`);
  }

}
