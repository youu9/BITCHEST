import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users/users.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users: any [];
currencies: any [];
userAuth:any[];
userId: any;
userSelected: {
};

saveResponse: any;
showList:boolean = true;

  constructor(private userService: UsersService,
              private route: Router,
              ) {
    // override the route reuse strategy
    this.route.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }

    this.route.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.route.navigated = false;
        // if you need to scroll back to top, here is the right place
        window.scrollTo(0, 0);
      }
    });

  }

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
   this.route.navigate(['/admin']);
  }

  delete(id) {
    //TODO
  }
}
