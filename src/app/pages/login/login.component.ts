import {Component, OnInit} from '@angular/core';
import {UserDto} from "../../swagger/services/models/user-dto";
import {AuthenticationRequest} from "../../swagger/services/models/authentication-request";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../swagger/services/services/authentication.service";
import {UserService} from "../../swagger/services/services/user.service";
import {JwtHelperService} from "@auth0/angular-jwt";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  userDto: UserDto = {firstName: '', lastName: '', email: '', password: ''};

  authRequest: AuthenticationRequest = {};
  errorMessages: Array<string> = [];
  errorMessage: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private userService: UserService,
  ) {

  }

  ngOnInit(): void {
  }

  login() {
    this.errorMessage = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: async (data) => {
        localStorage.setItem('token', data.token as string);
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(<string>data.token);
        if (decodedToken.authorities[0].authority === 'ROLE_ADMIN') {
          await this.router.navigate(['admin/dashboard']);
        } else {
          await this.router.navigate(['user']);
        }
      },
      error: (err) => {
        console.log(err);
        this.errorMessage.push(err.error.errorMessage);
      }
    });
  }

  register() {
    this.errorMessages = [];

    this.userService.registerUser({
        body: this.userDto
      }
    ).subscribe({
      next: async (data) => {
        await this.router.navigate(['confirm-register']);
      },
      error: (err) => {
        this.errorMessages = err.error.validationErrors;
      }
    });
  }


}
