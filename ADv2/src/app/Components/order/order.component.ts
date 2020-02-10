import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from '../../Services/order.service';
import { Order } from '../../Models/order.model';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {

    currentOrder: Order = this.orderService.currentOrder;
    currentOrderSub: Subscription;
    orderForm: FormGroup;

    constructor(private orderService: OrderService) { }

    ngOnInit() {
        this.currentOrderSub = this.orderService.currentOrderSub.subscribe(o => {
            this.currentOrder = o;
        });
        this.setupForm(this.currentOrder);
    }

    onSubmit() {
        console.log(this.orderForm.value);
    }

    setupForm(o: Order) {
        this.orderForm = new FormGroup({
            'pickupName': new FormControl(o.pickupName),
            'orderName': new FormControl(o.orderName),
            'phoneNumber': new FormControl(o.phoneNumber),
            'orderDate': new FormControl(o.orderDate.toISOString().split('T')[0]),
            'orderTime': new FormControl(o.orderTime),
            'pickupDate': new FormControl(o.pickupDate.toISOString().split('T')[0]),
            'pickupTime': new FormControl(o.pickupTime),
            'chickenPcs': new FormControl(o.chickenPcs),
            'jojoPcs': new FormControl(o.jojoPcs),
            'details': new FormControl(o.details),
            'store': new FormControl(o.storeId),
            'isActive': new FormControl(o.isActive),
            'isCompleted': new FormControl(o.isCompleted),
            'isCancelled': new FormControl(o.isCancelled),
        });
    }

    ngOnDestroy() {
        this.currentOrderSub.unsubscribe();
    }
}
