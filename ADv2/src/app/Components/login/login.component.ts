import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Login } from '../../Models/login.model';
import { LoginService } from '../../Services/login.service';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loginData: Login;

  constructor(private loginService: LoginService, private userService: UserService) { }

    ngOnInit() {
        this.setUpForm();
    }

    setUpForm() {
        this.loginForm = new FormGroup({
            'email': new FormControl(''),
            'password': new FormControl('')
        });
    }

    onSubmit() {
        this.loginData = new Login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value);
        this.loginService.loginUser(this.loginData);
        this.setUpForm();
    }

}
