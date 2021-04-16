export class Shaper {
    id: number;
    name: string;
    imageName: string;
    details: string;

    criadoPor: string;
    alteradoPor: string;
    createDate: Date;
    updateDate: Date;

    public constructor(init?: Partial<Shaper>) {
        Object.assign(this, init);
    }

}