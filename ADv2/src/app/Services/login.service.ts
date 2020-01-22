import { Injectable } from '@angular/core';
import { Login } from '../Models/login.model';
import { HttpService } from './http.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    constructor(private httpService: HttpService, private userService: UserService) { }

    loginUser(loginData: Login) {
        var user = this.httpService.loginUser(loginData.email, loginData.password);
        if(user.id != -1) 
        return user;

    }
}
