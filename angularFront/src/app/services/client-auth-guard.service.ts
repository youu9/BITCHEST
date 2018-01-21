import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class ClientAuthGuard {

  constructor(
    private route: Router,
    private authService: AuthService,
  ) { }

  canActivate() {
    let user = this.authService.currentUser;
    if (user && user.client) return true;

    this.route.navigate(['/no-access']);
    return false;
  }
}
