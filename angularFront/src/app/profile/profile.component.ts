import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {JwtHelper} from "angular2-jwt";
import {UsersService} from "../services/users/users.service";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId : String;
  userAuth : {};
  successPost : Boolean;
  

  constructor(public authService: AuthService, private userService: UsersService) { }


  ngOnInit() {
    this.userId = localStorage.getItem('id');
    this.userService.getUser(this.userId)
    .subscribe(userAuth => this.userAuth = userAuth);
  }

  updateUser(credentials){
    this.userService.saveUser(credentials, this.userId)
    .subscribe((response: Response) => {
      let res:any = response;
      if(res.success){
        this.successPost = true;
      }
    });
  }
}
