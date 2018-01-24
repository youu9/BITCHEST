import { Component, OnInit } from '@angular/core';
import {UsersService} from "../services/users/users.service";
import {Router} from "@angular/router";
import { FormArray } from '@angular/forms';
import {AuthService} from '../services/auth.service';


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
  errorBuy : boolean;
  userWalletTotal: any;
  
  

  constructor(private userService: UsersService, public authService:AuthService, private route: Router) {
   }

  ngOnInit() {

    this.userId = localStorage.getItem('id');

    this.userService.getUser(this.userId)
      .subscribe(userAuth => this.userAuth = userAuth);

    this.userService.getCurrencies()
      .subscribe(currencies => this.currencies = currencies);

    this.userService.myBuy()
    .subscribe(myBuy => this.myBuy = myBuy);

    if(this.authService.isClient()){
      this.userService.getUserWallet()
      .subscribe(userWallet => {
        this.userWalletTotal = userWallet.wallet.total;
      });
    }
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
    if( (parseInt(this.total.price) * parseInt(this.total.quantity)) < this.userWalletTotal){
      this.userService.buy(items)
        .subscribe((response: Response) => {
            this.successBuy = true;
            this.total = {
              'price': '',
              'quantity':'',
            }
            if(this.authService.isClient()){
              this.userService.getUserWallet()
              .subscribe(userWallet => {
                this.userService.walletSold = userWallet.wallet.total;
                this.userWalletTotal = this.userService.walletSold;
              });
            }
        });
      }
      else{
        this.errorBuy = true;
      }
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
          if(this.authService.isClient()){
            this.userService.getUserWallet()
            .subscribe(userWallet => {
              this.userService.walletSold = userWallet.wallet.total;
              this.userWalletTotal = this.userService.walletSold;
            });
          }
          this.successSell = true;
        }
      });
  }
  
  goToDetails(id, name){
    this.route.navigate(['currency/info', id, name]);
  }

}
