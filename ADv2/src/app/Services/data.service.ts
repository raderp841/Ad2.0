import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    users: User[] = [
        new User(1, 'peter@rader.com', 'Test123!', 'Peter', 'Rader', 9),
        new User(2, 'john@doe.com', 'Test123!', 'John', 'Doe', 0),
        new User(3, 'cora@rader.com', 'Test123!', 'Cora', 'Rader', 3),
        new User(4, 'gwen@rader.com', 'Test123!', 'Gwen', 'Rader', 7),
    ];

    invalidUser: User = new User(-1, '', '', '', '', -1);

    constructor() { }

    getUserByEmailPassword(email: string, password: string) {
        var user = this.users.filter(u => u.email == email && u.password == password);
        console.log(user);        
        if (user.length == 1) return user[0];
        return this.invalidUser;
    }
}
