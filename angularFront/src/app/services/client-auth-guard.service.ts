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
    if(!this.authService.isAdmin()) return true;

    this.route.navigate(['/no-access']);
    return false;
  }
}
