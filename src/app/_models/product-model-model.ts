import { Store } from '../_models/store';
export class ProductModel {
    name: string;
    details: string;
    id: number;
    storeId: number;
    store: Store;


    public constructor(init?: Partial<ProductModel>) {
        Object.assign(this, init);
    }

    static fromJson(jsonData: any): ProductModel {
        return Object.assign(new ProductModel(), jsonData);
    }
}
