import { Injectable } from '@angular/core';
import { Token } from '../Models/token.model';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    private currentToken: Token;

    constructor() { }

    getToken() {
        console.log(this.currentToken);
        return this.currentToken;
    }

    setToken(token: Token) {
        this.currentToken = token;
        console.log(this.currentToken);
    }
}
