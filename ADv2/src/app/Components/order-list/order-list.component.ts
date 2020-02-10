import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from '../../Services/order.service';
import { Order } from '../../Models/order.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnDestroy {

    ordersForStore: Order[] = [];
    ordersForStoreSub: Subscription;

    constructor(private orderService: OrderService, private router: Router) { }

    ngOnInit() {
        this.ordersForStoreSub = this.orderService.ordersForStoreSub.subscribe(o => {
            this.ordersForStore = o;
        });
    }

    onOrderClicked(order: Order) {
        this.orderService.setCurrentOrder(order);
        this.router.navigate([`order/${order.id}`]);
    }

    ngOnDestroy() {
        this.ordersForStoreSub.unsubscribe();
    }

}
