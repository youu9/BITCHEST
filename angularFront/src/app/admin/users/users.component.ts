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

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);

    this.userService.getCurrencies()
      .subscribe( currencies => this.currencies = currencies);
  }



}
