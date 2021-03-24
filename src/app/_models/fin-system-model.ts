import { Store } from '../_models/store';
import { FinSystemColor } from './fin-system-color-model';

export class FinSystem {
    name: string;
    details: string;
    id: number;
    storeId: number;
    store: Store;
    criadoPor: string;
    alteradoPor: string;
    createDate: Date;
    updateDate: Date;

    finSystemColors: FinSystemColor[] = [];


    public constructor(init?: Partial<FinSystem>) {
        Object.assign(this, init);
    }

    static fromJson(jsonData: any): FinSystem {
        return Object.assign(new FinSystem(), jsonData);
    }
}
