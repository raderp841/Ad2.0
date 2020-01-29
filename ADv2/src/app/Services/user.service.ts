import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    user: User;
    userSub: Subject<User> = new Subject<User>();
    constructor(private router: Router) { }

    setUser(user: User) {
        this.user = user;
        this.pushNextUser();
    }

    clearUser() {
        this.user = null;
        this.pushNextUser();
        this.router.navigate(['/login']);
    }

    pushNextUser() {
        this.userSub.next(this.user);
    }
}
