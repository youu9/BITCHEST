import { AuthService } from '../services/auth.service';
import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User}  from '../model/user';
// import { EmailValidator } from '@angular/forms';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  invalidLogin: boolean;

  // user = new User()

  user = {
    'email': '',
    'password': '',
  }

  constructor(private router: Router,
              public authService: AuthService,
              private route: ActivatedRoute,) {
  }


  attemptLogin(){
    
    var credentials = {
      'email': this.user.email,
      'password': this.user.password,
    }

     this.signIn(credentials)
  }
  /**
   * Fonction signIn() appelée a la validation du formulaire d'authentification ( login.component.html) qui
   * fait passer les (credentials => login/pwd) pour validation
   * .subscribe a la réponse
   * if(result) alors on recupère l'url appelé avant démarche de login pour rediriger l'utilisateur
   * vers l'url demander en premier lieu.
   * @author Younes CHBADA
   * @version 1.0
   * */

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(result => {
        if (result && this.authService.isAdmin()) {
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/admin']);
        }
        else if(result){
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/']);
        }
        else
          this.invalidLogin = true;
      });
  }
}
