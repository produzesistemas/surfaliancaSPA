import { Store } from './store';
export class BoardType {
    name: string;
    id: number;
    storeId: number;


    public constructor(init?: Partial<BoardType>) {
        Object.assign(this, init);
    }

    static fromJson(jsonData: any): BoardType {
        return Object.assign(new BoardType(), jsonData);
    }
}