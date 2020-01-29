import { Injectable } from '@angular/core';
import { Login } from '../Models/login.model';
import { HttpService } from './http.service';
import { UserService } from './user.service';
import { Register } from '../Models/register.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    constructor(private httpService: HttpService, private userService: UserService) { }

    loginUser(loginData: Login) {
        var user = this.httpService.loginUser(loginData.email, loginData.password);
        this.userService.setUser(user);
        if (user.id == -1) {
            return false;
        }
        return true;
    }

    registerUser(regData: Register) {
        var user = this.httpService.registerUser(regData);
        this.userService.setUser(user);
        if (user.id == -1) {
            return false;
        }
        return true;
    }
}
