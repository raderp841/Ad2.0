import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

    

    constructor(private dataService: DataService) { }

    loginUser(email: string, password: string) {
        return this.dataService.getUserByEmailPassword(email, password);
    }
}
