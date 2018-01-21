import { Component, OnInit } from '@angular/core';
import {UsersService} from "../services/users/users.service";

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  userAuth:any[];
  userId: any;

  constructor(private userService: UsersService) { }

  ngOnInit() {

    this.userId = localStorage.getItem('id');

    this.userService.getUser(this.userId)
      .subscribe(userAuth => this.userAuth = userAuth);

  }

}
