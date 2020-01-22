
export class User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    securityLevel: number;

    constructor(id: number, email: string, password: string, firstName: string, lastName: string, securityLevel: number) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.securityLevel = securityLevel;
    }
}
