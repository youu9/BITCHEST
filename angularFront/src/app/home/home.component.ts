import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {JwtHelper} from "angular2-jwt";
import {UsersService} from "../services/users/users.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
currencies:any [];
userAuth:any[];
userId: any;
  /**
   * Verification de d'utilisateur connecté en fonction de la présence
   * d'un token en localStorage.
   * Redirection vers path: 'login' dans le cas contraire.
   * @see AuthService
   *@author Younes CHBADA
   *@version 1.0*/
  constructor(
    public authService: AuthService,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.userId = localStorage.getItem('id');

    this.userService.getCurrencies()
      .subscribe( currencies => this.currencies = currencies);
   //console.log(new JwtHelper().decodeToken(localStorage.getItem('token')))

    this.userService.getUser(this.userId)
      .subscribe(userAuth => this.userAuth = userAuth);
  }


}
