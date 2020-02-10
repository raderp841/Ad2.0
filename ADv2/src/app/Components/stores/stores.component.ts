import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from '../../Services/store.service';
import { Store } from '../../Models/store.model';
import { Subscription } from 'rxjs';
import { OrderService } from '../../Services/order.service';

@Component({
    selector: 'app-stores',
    templateUrl: './stores.component.html',
    styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit, OnDestroy {

    stores: Store[] = [];
    storesSub: Subscription;

    constructor(private storeService: StoreService, private orderService: OrderService) { }

    ngOnInit() {
        this.storesSub = this.storeService.storesForUserSub.subscribe(s => {
            this.stores = s;
        });
        this.storeService.getStoresForUser();
    }

    onSelectStore(storeId: number, event) {
        let listEl: HTMLCollection = event.target.parentElement.parentElement.parentElement.children;
        let activeEl: HTMLElement = event.target.parentElement;
        for (let i = 0; i < listEl.length; i++) {
            for (let j = 0; j < listEl[i].children.length; j++) {
                if (listEl[i].children[j].classList.contains('active-click')) {
                    listEl[i].children[j].classList.remove('active-click');
                }
            }
        }
        activeEl.classList.add('active-click');
        
        this.orderService.getOrdersForStore(storeId);
    }

    ngOnDestroy() {
        this.storesSub.unsubscribe();
    }

}
