import { Store } from './store';
export class BoardModel {
    name: string;
    id: number;
    value: number;
    criadoPor: string;
    alteradoPor: string;
    createDate: Date;
    updateDate: Date;


    public constructor(init?: Partial<BoardModel>) {
        Object.assign(this, init);
    }

    static fromJson(jsonData: any): BoardModel {
        return Object.assign(new BoardModel(), jsonData);
    }
}