import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Order } from '../Models/order.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

    ordersForStore: Order[] = [];
    ordersForStoreSub: Subject<Order[]> = new Subject<Order[]>();
    currentOrder: Order;
    currentOrderSub: Subject<Order> = new Subject<Order>();

    constructor(private httpService: HttpService) { }

    getOrdersForStore(storeId: number) {
        this.ordersForStore = this.httpService.getOrdersForStore(storeId);
        this.ordersForStoreSub.next(this.ordersForStore);
    }

    setCurrentOrder(order: Order) {
        this.currentOrder = order;
        this.currentOrderSub.next(this.currentOrder);
    }
}
