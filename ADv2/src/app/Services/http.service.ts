import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Register } from '../Models/register.model';
import { TokenService } from './token.service';
import { Token } from '../Models/token.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

    

    constructor(private dataService: DataService, private tokenService: TokenService) { }

    loginUser(email: string, password: string) {
        //will be http get request to api
        var user = this.dataService.getUserByEmailPassword(email, password);
        if (user == null || user.id == -1) {

        }
        else {
            var token = new Token(user.id, true);
            this.tokenService.setToken(token);
        }

        return user;
    }

    registerUser(reg: Register) {
        //will be http post request to api
        var user = this.dataService.postNewUser(reg);
        if (!!user || user.id == -1) {

        }
        else {
            var token = new Token(user.id, true);
            this.tokenService.setToken(token);
        }

        return user;
    }

    getStoresForUser() {
        //http request with token
       return this.dataService.getStoresForUser(this.tokenService.getToken());
    }

    getOrdersForStore(storeId: number) {
        return this.dataService.getOrdersForStore(this.tokenService.getToken(), storeId); 
    }
}
