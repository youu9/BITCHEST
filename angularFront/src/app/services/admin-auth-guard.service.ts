import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {UsersService} from "./users/users.service";

@Injectable()
export class AdminAuthGuard implements CanActivate{
  userAuth:any[];
  userId: any;
  /**
   * Service de verification de droit d'utilisateur.
   * Si user connecté ET user.admin => alors on laisse passer
   * sinon => redirection vers page '/no-access'.
   * (fonctionnel mais pas connecter)
   * @author Younes CHBADA
   * @version 1.0
   * */

  constructor(
    private route: Router,
    private authService: AuthService,
    private userService: UsersService
  ) { }

  canActivate() {
    if(this.authService.isAdmin()) return true;

    this.route.navigate(['/no-access']);
    return false;
  }
}
