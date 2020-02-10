import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';
import { Register } from '../Models/register.model';
import { Store } from '../Models/store.model';
import { Token } from '../Models/token.model';
import { UserStore } from '../Models/user-store.model';
import { Order } from '../Models/order.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    users: User[] = [
        new User(-2, 'guest@user.com', 'GuestUser123!', 'Guest', 'User', 0),
        new User(1, 'peter@rader.com', 'Test123!', 'Peter', 'Rader', 9),
        new User(2, 'john@doe.com', 'Test123!', 'John', 'Doe', 0),
        new User(3, 'cora@rader.com', 'Test123!', 'Cora', 'Rader', 3),
        new User(4, 'gwen@rader.com', 'Test123!', 'Gwen', 'Rader', 7),
    ];

    stores: Store[] = [
        new Store('Sheffield Lake Apples', 'Sheffield Lake', 'Oh', '44054', '4100 Ivanhoe Ave', true, '440-949-6108', '7am - 10pm', '9am - 9pm', 1),
        new Store('Elyria Apples', 'Elyria', 'Oh', '44054', '4100 Ivanhoe Ave', true, '440-949-6108', '7am - 10pm', '9am - 9pm', 2),
        new Store('Lorain Apples', 'Lorain', 'Oh', '44054', '4100 Ivanhoe Ave', true, '440-949-6108', '7am - 10pm', '9am - 9pm', 3),
        new Store('Village Market', 'Wellington', 'Oh', '44054', '4100 Ivanhoe Ave', true, '440-949-6108', '7am - 10pm', '9am - 9pm', 4)
    ];

    userStores: UserStore[] = [
        new UserStore(1, 1, 1),
        new UserStore(2, 1, 2),
        new UserStore(3, 1, 3),
        new UserStore(4, 1, 4),
        new UserStore(5, 3, 2),
        new UserStore(6, 4, 4),
        new UserStore(7, 4, 3),
    ];

    orders: Order[] = [
        new Order(1, 1, 'Angela', 'May', '123-1234',       new Date('02/05/2020'), 16, new Date('02/06/2020'), 17, 12, 5, 'dark', true, false, false),
        new Order(2, 1, 'Tony', 'Nichole', '123-1234',     new Date('02/05/2020'), 16, new Date('02/06/2020'), 17, 12, 5, 'dark', false, true, false),
        new Order(3, 1, 'Jim', 'Michelle', '123-1234',     new Date('02/05/2020'), 16, new Date('02/06/2020'), 17, 12, 5, 'dark', true, false, false),
        new Order(4, 1, 'Charles', 'Sarah', '123-1234',    new Date('02/05/2020'), 16, new Date('02/06/2020'), 17, 12, 5, 'dark', false, false, true),
        new Order(5, 1, 'Meg', 'Kelly', '123-1234',        new Date('02/05/2020'), 16, new Date('02/06/2020'), 17, 12, 5, 'dark', true, false, false),
        new Order(6, 1, 'Fred', 'Ashley', '123-1234',      new Date('02/05/2020'), 16, new Date('02/06/2020'), 17, 12, 5, 'dark', false, true, false),
        new Order(7, 1, 'Aaron', 'Simone', '123-1234',     new Date('02/05/2020'), 16, new Date('02/06/2020'), 17, 12, 5, 'dark', true, false, false),
        new Order(8, 1, 'Georgina', 'Arlene', '123-1234',  new Date('02/05/2020'), 16, new Date('02/06/2020'), 17, 12, 5, 'dark', false, false, true),
        new Order(9, 1, 'Willie', 'Renee', '123-1234',     new Date('02/05/2020'), 16, new Date('02/06/2020'), 17, 12, 5, 'dark', true, false, false),
        new Order(10, 2, 'Tanya', 'Nick', '123-1234',      new Date('02/05/2020'), 16, new Date('02/06/2020'), 17, 12, 5, 'dark', false, true, false),
        new Order(11, 2, 'Mel', 'George', '123-1234',      new Date('02/05/2020'), 16, new Date('02/06/2020'), 17, 12, 5, 'dark', true, false, false),
        new Order(12, 2, 'Ben', 'Randy', '123-1234',       new Date('02/05/2020'), 16, new Date('02/06/2020'), 17, 12, 5, 'dark', false, false, true),
        new Order(13, 2, 'Chanice', 'Chanice', '123-1234', new Date('02/05/2020'), 16, new Date('02/06/2020'), 17, 12, 5, 'dark', true, false, false),
        new Order(14, 3, 'Kelly', 'Kelly', '123-1234',     new Date('02/05/2020'), 16, new Date('02/06/2020'), 17, 12, 5, 'dark', false, true, false),
        new Order(15, 3, 'Joe', 'Walen', '123-1234',       new Date('02/05/2020'), 16, new Date('02/06/2020'), 17, 12, 5, 'dark', true, false, false),
        new Order(16, 3, 'Xander', 'Margo', '123-1234',    new Date('02/05/2020'), 16, new Date('02/06/2020'), 17, 12, 5, 'dark', false, false, true),
        new Order(17, 3, 'Brittany', 'Benny', '123-1234',  new Date('02/05/2020'), 16, new Date('02/06/2020'), 17, 12, 5, 'dark', true, false, false),
        new Order(18, 4, 'Wess', 'Hollis', '123-1234',     new Date('02/05/2020'), 16, new Date('02/06/2020'), 17, 12, 5, 'dark', true, false, false),
        new Order(19, 4, 'Penelope', 'Otis', '123-1234',   new Date('02/05/2020'), 16, new Date('02/06/2020'), 17, 12, 5, 'dark', true, false, false),
        new Order(20, 4, 'Quin', 'Travis', '123-1234',     new Date('02/05/2020'), 16, new Date('02/06/2020'), 17, 12, 5, 'dark', false, false, true),
        new Order(21, 4, 'Micah', 'David', '123-1234',     new Date('02/05/2020'), 16, new Date('02/06/2020'), 17, 12, 5, 'dark', true, false, false),
        new Order(22, 4, 'Marley', 'Marlene', '123-1234',  new Date('02/05/2020'), 16, new Date('02/06/2020'), 17, 12, 5, 'dark', false, true, false),
        new Order(23, 4, 'Ralph', 'Irene', '123-1234',     new Date('02/05/2020'), 16, new Date('02/06/2020'), 17, 12, 5, 'dark', true, false, false),
        new Order(24, 4, 'Warren', 'Val', '123-1234',      new Date('02/05/2020'), 16, new Date('02/06/2020'), 17, 12, 5, 'dark', false, false, true),
        new Order(25, 4, 'Vicky', 'Yvonne', '123-1234',    new Date('02/05/2020'), 16, new Date('02/06/2020'), 17, 12, 5, 'dark', true, false, false),
    ];

    invalidUser: User = new User(-1, '', '', '', '', -1);

    constructor() { }

    getUserByEmailPassword(email: string, password: string) {
        var user = this.users.filter(u => u.email == email && u.password == password);
        console.log(user);
        if (user.length == 1) return user[0];
        return this.invalidUser;
    }

    postNewUser(reg: Register) {
        var user = new User((this.users.length + 1), reg.email, reg.password, reg.firstName, reg.lastName, 0);
        this.users.push(user);
        return this.getUserByEmailPassword(reg.email, reg.password);
    }

    getStoresForUser(token: Token) {
        if (token == null || !token.checkTokenValid()) {
            return [];
        }
        let storeIds = [];
        this.getUserStores(token.userId).forEach(us => {
            storeIds.push(us.storeId);
        });
        let stores = this.stores.filter(s => {
            if (storeIds.includes(s.id)) return s;
        });
        return stores.slice();
    }

    private getUserStores(userId: number) {
        let userStores = this.userStores.filter(us => us.userId == userId);
        return userStores;
    }

    getOrdersForStore(token: Token, storeId: number) {
        if (token == null || !token.checkTokenValid()) return [];
        let orders: Order[] = this.orders.filter(o => o.storeId == storeId).slice();
        return orders;
    }
}
