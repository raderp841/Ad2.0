export class Store {
    id: number;
    name: string;
    city: string;
    state: string;
    zip: string;
    streetAddress: string;
    isActive: boolean;
    phone: string;
    storeHours: string;
    deliHours: string;

    constructor(name: string, city: string, state: string, zip: string, streetAddress: string, isActive: boolean, phone: string, storeHours: string, deliHours: string, id: number = -1) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.streetAddress = streetAddress;
        this.isActive = isActive;
        this.phone = phone;
        this.storeHours = storeHours;
        this.deliHours = deliHours;
    }
}
