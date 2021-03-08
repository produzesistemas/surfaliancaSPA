import { City } from './city';
export class Store {
    id: number;
    name: string;
    imageName: string;
    description: string;
    cnpj: string;
    contact: string;
    phone: string;
    exchangePolicy: string;
    deliveryPolicy: string;
    aspNetUsersId: string;
    valueMinimum: number;

    street: string;
    district: string;
    number: string;
    cep: string;
    nameCity: string;

    aspNetUsers: any;

    public constructor(init?: Partial<Store>) {
        Object.assign(this, init);
    }
}
