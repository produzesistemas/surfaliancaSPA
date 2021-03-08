import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericHttpService } from './genericHttpService';
import { ProductModel } from '../_models/product-model-model';

@Injectable({ providedIn: 'root' })
export class ProductModelService extends GenericHttpService<ProductModel> {
private obj: ProductModel = new ProductModel();
    constructor(private http: HttpClient) {
        super(http);
    }

    getByFilter(filter: any) {
      return this.postAll('productModel/filter', filter);
    }

    save(productModel) {
      return this.post('productModel/save', productModel);
   }

    deleteById(id) {
          return this.delete(`productModel/${id}`);
      // return this.http.delete<any>(`${this.getUrlApi()}productModel/${id}`);
    }

    set(obj: any) {
      this.obj = obj;
    }

    get(): any {
      return this.obj;
  }

}
