import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users: any [];
currencies: any [];
userSelected: {};

saveResponse: any;
showList:boolean = true;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);

    this.userService.getCurrencies()
      .subscribe( currencies => this.currencies = currencies);
  }

  getUserInfo(id){
    this.userService.getUser(id)
      .subscribe(user =>{
        this.userSelected = user;
        console.log(this.userSelected)
  });
  }

  save(user, id){
    console.log(user)
    this.userSelected = {
      "id": user.id,
      "name": user.name,
      "email": user.email,
      "role": user.role
    };
  console.log(this.userSelected)
    this.userService.saveUser(this.userSelected, id)
      .subscribe( saveResponse => this.saveResponse = saveResponse);
  }
}
