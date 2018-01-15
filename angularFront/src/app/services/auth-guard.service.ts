import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  /**
   * Service de verification d'utilisateur.
   * Via boolean isLoggedIn passer a True lors de l'authentification
   * (authService)
   * renvoi vers login si FALSE
   * @author Younes CHBADA
   * @version 1.0
   * */
  constructor(
    private router: Router,
    private authService: AuthService) {}

  canActivate(route, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) return true;

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url}});
    return false;
  }
}
