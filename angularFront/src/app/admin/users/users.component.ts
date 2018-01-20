import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users: any [];
currencies: any [];
userAuth:any[];
userSelected: {
};
userId: any;
saveResponse: any;
showList:boolean = true;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userId = localStorage.getItem('id');

    this.userService.getUser(this.userId)
      .subscribe(userAuth => this.userAuth = userAuth);

    this.userService.getUsers()
      .subscribe(users => this.users = users);

    this.userService.getCurrencies()
      .subscribe( currencies => this.currencies = currencies);
  }

  getUserInfo(id){
    this.userService.getUser(id)
      .subscribe(user =>{
        this.userSelected = user;
  });
  }

  save(user, id){
    console.log(user)
  //console.log(this.userSelected)
    this.userService.saveUser(user, id)
      .subscribe( saveResponse => this.saveResponse = saveResponse);
    if(this.saveResponse)console.log('OK!')
  }
}
