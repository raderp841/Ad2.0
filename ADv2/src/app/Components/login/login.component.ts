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


  constructor(private loginService: LoginService, private userService: UserService, private router: Router) { }

    ngOnInit() {
        this.setUpForm();
        this.userSub = this.userService.userSub.subscribe(u => {
            this.user = u;
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

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }

}
