export class City {
    descricao: string;
    federativeUnitId: number;
    id: number;

    public constructor(init?: Partial<City>) {
        Object.assign(this, init);
    }
}
