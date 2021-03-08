import { Store } from '../_models/store';
export class SurfboardType {
    name: string;
    id: number;
    storeId: number;


    public constructor(init?: Partial<SurfboardType>) {
        Object.assign(this, init);
    }

    static fromJson(jsonData: any): SurfboardType {
        return Object.assign(new SurfboardType(), jsonData);
    }
}