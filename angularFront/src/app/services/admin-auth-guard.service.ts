import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AdminAuthGuard implements CanActivate{

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
  ) { }

  canActivate() {
    let user = this.authService.currentUser;
    if (user && user.admin) return true;

    this.route.navigate(['/no-access']);
    return false;
  }
}
