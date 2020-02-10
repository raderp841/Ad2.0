import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Store } from '../Models/store.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

    storesForUser: Store[] = [];
    storesForUserSub: Subject<Store[]> = new Subject<Store[]>();

    constructor(private httpService: HttpService) { }

    getStoresForUser() {
        this.storesForUser = this.httpService.getStoresForUser();
        this.storesForUserSub.next(this.storesForUser);
    }
}
