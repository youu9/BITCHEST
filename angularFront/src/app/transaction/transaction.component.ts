import { Component, OnInit } from '@angular/core';
import {UsersService} from "../services/users/users.service";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  userAuth:any[];
  userId: any;
  currencies: any[];
  res;

  constructor(private userService: UsersService) { }

  ngOnInit() {

    this.userId = localStorage.getItem('id');

    this.userService.getUser(this.userId)
      .subscribe(userAuth => this.userAuth = userAuth);

    this.userService.getCurrencies()
      .subscribe(currencies => this.currencies = currencies);

  }

  buy(items){
    console.log(items);
    this.userService.buy(items)
      .subscribe( res => this.res = res );
  }

  sell(id){
    console.log(id);
    this.userService.sell(id)
      .subscribe(res => this.res = res);
  }

}
