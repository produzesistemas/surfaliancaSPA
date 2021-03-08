export class Team {
    name: string;
    id: number;
    description: string;
    storeId: number;
    public constructor(init?: Partial<Team>) {
        Object.assign(this, init);
    }

    teamImages: any[] = [];
}
