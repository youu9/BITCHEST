import { Component, OnInit } from '@angular/core';
import {UsersService} from "../services/users/users.service";
import {Router} from "@angular/router";
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  userAuth:any[];
  userId: any;
  currencies: any[];
  myBuy:any [];
  total = {
    'price': '',
    'quantity':'',
  }
  successSell : boolean;
  successBuy: boolean;

  constructor(private userService: UsersService, private route: Router) {
   }

  ngOnInit() {

    this.userId = localStorage.getItem('id');

    this.userService.getUser(this.userId)
      .subscribe(userAuth => this.userAuth = userAuth);

    this.userService.getCurrencies()
      .subscribe(currencies => this.currencies = currencies);

    this.userService.myBuy()
    .subscribe(myBuy => this.myBuy = myBuy);
  }

  addPrice(id){
    
    for(let currency of this.currencies){
      if(currency.id == id){
        this.total.price = currency.today_quotation.rate;
        break;
      }
    }
    console.log(this.total);
  }

  buy(items){
    this.userService.buy(items)
      .subscribe((response: Response) => {
          this.successBuy = true;
          this.total = {
            'price': '',
            'quantity':'',
          }
          
      });
  }

  sell(id){
    this.userService.sell(id)
      .subscribe((response: Response) => {
        let res:any = response;
        if(res.success){

          for (var _i = 0; _i < this.myBuy.length; _i++) {
            if(this.myBuy[_i].id === id){
              this.myBuy.splice(_i, 1);
              break;
            }
          }
          
          this.successSell = true;
        }
      });
  }
  
  goToDetails(id, name){
    this.route.navigate(['currency/info', id, name]);
  }

}
