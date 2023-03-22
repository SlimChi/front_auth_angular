import { Component, OnInit } from '@angular/core';
import {UserDto} from "../../swagger/services/models/user-dto";
import {UserService} from "../../swagger/services/services/user.service";
import {HelperService} from "../../services/helper/helper.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  userDto: UserDto = { email: '',    firstName: '',    lastName: '',    password: '' };

  successMsg = '';

  constructor(
    private userService: UserService,
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
    this.userService.findById({
      'user-id': this.helperService.userId
    }).subscribe({
      next: (data) => {
        this.userDto = data;
      }
    });
  }

  save() {
    this.successMsg = '';
    this.userDto.id = this.helperService.userId;
    this.userService.save1({
      body:this.userDto

    }).subscribe({
      next: () => {
        this.successMsg = 'Votre profile est à jour';
      }
    });
  }
}
