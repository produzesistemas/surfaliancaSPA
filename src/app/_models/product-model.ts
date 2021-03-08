export class Product {
    name: string;
    id: number;
    storeId: number;

    public constructor(init?: Partial<Product>) {
        Object.assign(this, init);
    }

}
