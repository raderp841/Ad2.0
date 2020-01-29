import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Register } from '../../Models/register.model';
import { LoginService } from '../../Services/login.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;
    isMatchingPass: boolean = true;
    isMatchingEmail: boolean = true;

    constructor(private loginService: LoginService) { }

    ngOnInit() {
        this.setUpForm();
    }

    setUpForm() {
        this.registerForm = new FormGroup({
            'email': new FormControl(''),
            'emailConfirm': new FormControl(''),
            'firstName': new FormControl(''),
            'lastName': new FormControl(''),
            'password': new FormControl(''),
            'confirmPassword': new FormControl(''),
        });
    }

    onSubmit() {
        var email = this.registerForm.controls['email'].value;
        var firstName = this.registerForm.controls['firstName'].value;
        var lastName = this.registerForm.controls['lastName'].value;
        var password = this.registerForm.controls['password'].value;
        var reg: Register = new Register(email, firstName, lastName, password);

        this.loginService.registerUser(reg);
    }

    checkEmailMatch() {
        this.isMatchingEmail = this.doesMatch(this.registerForm.controls['email'].value, this.registerForm.controls['emailConfirm'].value);
    }

    checkPassMatch() {
        this.isMatchingPass = this.doesMatch(this.registerForm.controls['password'].value, this.registerForm.controls['confirmPassword'].value);
    }

    doesMatch(a: string, b: string): boolean {
        if (a === b) return true;
        return false;
    }

}
