import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Login } from '../../Models/login.model';
import { LoginService } from '../../Services/login.service';
import { UserService } from '../../Services/user.service';
import { User } from '../../Models/user.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

    loginForm: FormGroup;
    loginData: Login;
    user: User;
    userSub: Subscription;
    isLoggedIn: boolean;
    firstName: string;


    constructor(private loginService: LoginService, private userService: UserService, private router: Router) { }

    ngOnInit() {

        if (this.userService.user != null && this.userService.user.id != -1) {
            this.isLoggedIn = true;
            this.firstName = this.userService.user.firstName;
        }
        else {
            this.isLoggedIn = false;
        }

        this.setUpForm();
        this.userSub = this.userService.userSub.subscribe(u => {
            this.user = u;
            if (u != null && u.id != -2 && u.id != -1) {
                this.isLoggedIn = true;
            }
            else {
                this.isLoggedIn = false;
            }
        });
    }

    setUpForm() {
        this.loginForm = new FormGroup({
            'email': new FormControl(''),
            'password': new FormControl('')
        });
    }

    onSubmit() {
        this.loginData = new Login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value);
        if (this.loginService.loginUser(this.loginData)) {
            this.router.navigate(['/dashboard']);
        }
    }

    onDevLogin() {
        this.loginData = new Login('peter@rader.com', 'Test123!');
        if (this.loginService.loginUser(this.loginData)) {
            this.router.navigate(['/dashboard']);
        }
    }

    onGuestLogin() {
        if(this.loginService.guestLogin()) {
            this.router.navigate(['/dashboard']);
        }
    }

    onStayLoggedIn() {
        this.router.navigate(['/dashboard']);
    }

    onLogout() {
        this.userService.clearUser();
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }

}
