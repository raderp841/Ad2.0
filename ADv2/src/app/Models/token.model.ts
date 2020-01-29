
export class Token {
    token: string;
    created: Date;
    expire: Date;
    userId: number;

    constructor(userId: number, setTokenDates: boolean, created?: Date, expire?: Date) {
        this.userId = userId;
        this.createToken();
        if (setTokenDates) {
            this.setTokenDates();
        }
        else {
            this.created = created;
            this.expire = expire;
        }
    }

    

    private createToken() {
        this.token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    private setTokenDates() {
        this.created = new Date();
        this.expire = new Date();
        this.expire.setDate(this.created.getDate() + 1);
    }
}
