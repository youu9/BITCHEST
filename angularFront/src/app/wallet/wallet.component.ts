import { Component, OnInit } from '@angular/core';
import {UsersService} from "../services/users/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  userAuth:any[];
  userId: any;
  userWallet:any [];
  userWalletTotal: any;
  myBuy:any [];

  constructor(private userService: UsersService,
              private route: Router
) { }

  ngOnInit() {

    this.userId = localStorage.getItem('id');

    this.userService.getUser(this.userId)
      .subscribe(userAuth => this.userAuth = userAuth);

    this.userService.getUserWallet()
      .subscribe(userWallet => {
        this.userWalletTotal = userWallet.wallet.total;
        this.userWallet = userWallet.wallet.currencies;
      });

    this.userService.myBuy()
      .subscribe(myBuy => this.myBuy = myBuy);
  }

  goToDetails(id, name){
    this.route.navigate(['currency/info', id, name]);
  }
}
