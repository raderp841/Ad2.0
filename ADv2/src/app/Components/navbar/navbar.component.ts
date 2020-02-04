import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { User } from '../../Models/user.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

    logedIn: boolean = false;
    userSub: Subscription;

    constructor(private userService: UserService, private router: Router ) { }

    ngOnInit() {
        this.userSub = this.userService.userSub.subscribe(u => {
            console.log(u);
            if (u == null || u.id == -1) {
                this.logedIn = false;
            }
            else {
                this.logedIn = true;
            }
            console.log(this.logedIn);
        });
    }

    onLogout() {
        //this.userService.clearUser();
        this.router.navigate(['./login']);
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }

}
