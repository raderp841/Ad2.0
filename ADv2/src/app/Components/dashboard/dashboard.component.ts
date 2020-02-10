import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { User } from '../../Models/user.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    private user: User;
    isEmployee: boolean = false;
    isCustomer: boolean = true;

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() {
        this.user = this.userService.user;
        if (this.user != null && this.user.securityLevel >= 2) {
            this.setEmployeeView();
        }
        else {
            this.setCustomerView();
        }
    }

    setEmployeeView() {
        this.isEmployee = true;
        this.isCustomer = false;
    }

    setCustomerView() {
        this.isCustomer = true;
        this.isEmployee = false;
    }

    onShowStoreOrders() {
        this.router.navigate(['stores']);
    }

}
