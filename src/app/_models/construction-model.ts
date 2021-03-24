export class Construction {
    name: string;
    details: string;
    id: number;
    storeId: number;
    criadoPor: string;
    alteradoPor: string;
    createDate: Date;
    updateDate: Date;

    public constructor(init?: Partial<Construction>) {
        Object.assign(this, init);
    }

    static fromJson(jsonData: any): Construction {
        return Object.assign(new Construction(), jsonData);
    }
}
