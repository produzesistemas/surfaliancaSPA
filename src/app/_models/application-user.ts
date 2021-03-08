export class ApplicationUser {
    id: string;
    providerId: string;
    provider: string;
    discriminator: string;
    email: string;
    userName: string;
    emailConfirmed: boolean;
    phoneNumberConfirmed: boolean;
    twoFactorEnabled: boolean;
    lockoutEnabled: boolean;
    accessFailedCount: number;

    public constructor(init?: Partial<ApplicationUser>) {
        Object.assign(this, init);
    }
}
