import { Store } from '../_models/store';
export class FinSystem {
    name: string;
    details: string;
    id: number;
    storeId: number;
    store: Store;


    public constructor(init?: Partial<FinSystem>) {
        Object.assign(this, init);
    }

    static fromJson(jsonData: any): FinSystem {
        return Object.assign(new FinSystem(), jsonData);
    }
}
