export class Order {
    id: number;
    storeId: number;
    pickupName: string;
    orderName: string;
    phoneNumber: string;
    orderDate: Date;
    orderTime: number;
    pickupDate: Date;
    pickupTime: number;
    chickenPcs: number;
    jojoPcs: number;
    details: string;
    isActive: boolean;
    isCompleted: boolean;
    isCancelled: boolean;

    constructor(
        id: number,
        storeId: number,
        pickupName: string,
        orderName: string,
        phoneNumber: string,
        orderDate: Date,
        orderTime: number,
        pickupDate: Date,
        pickupTime: number,
        chickenPcs: number,
        jojoPcs: number,
        details: string,
        isActive: boolean,
        isCompleted: boolean,
        isCancelled: boolean
    ) {
        this.id = id;
        this.storeId = storeId;
        this.pickupName = pickupName;
        this.orderName = orderName;
        this.phoneNumber = phoneNumber;
        this.orderDate = orderDate;
        this.orderTime = orderTime;
        this.pickupDate = pickupDate;
        this.pickupTime = pickupTime;
        this.chickenPcs = chickenPcs;
        this.jojoPcs = jojoPcs;
        this.details = details;
        this.isActive = isActive;
        this.isCompleted = isCompleted;
        this.isCancelled = isCancelled;
    }
}
