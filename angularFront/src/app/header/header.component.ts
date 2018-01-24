import { Component, OnInit } from '@angular/core';
import {MenuType} from './header.metadata';
import {ROUTES} from './header-routes.config';
import {AuthService} from '../services/auth.service';
import {UsersService} from "../services/users/users.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public MenuItems: any[];
  public BrandMenu: any;
  userWalletTotal: any;

  isCollapsed = true;

  constructor(public authService: AuthService,
              public userService: UsersService) { }

  ngOnInit() {
    this.MenuItems = ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
    this.BrandMenu = ROUTES.filter(menuItem => menuItem.menuType === MenuType.BRAND)[0];
    
    if(this.authService.isClient()){
      this.userService.getUserWallet()
      .subscribe(userWallet => {
        this.userService.walletSold = userWallet.wallet.total;
      });
    }
   
  }

  public getMenuItemClasses(menuItem: any) {
    return{
      'pull-xs-right': this.isCollapsed && menuItem.menuType === MenuType.RIGHT
    };
  }
}
