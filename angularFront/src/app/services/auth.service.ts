import { Injectable } from '@angular/core';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthService {
  /**
   * Service d'auth du user.
   * Envoi credentials vers Api check LDAP
   * si on a une réponse et qu'elle contient 'authorization' dans le header ('Jwt Token')
   * ça veux dire que les logins sont bon, on enregistre donc le token
   * en LocalStorage
   * sinon => redirection vers page '/no-access'.
   * (fonctionnel mais pas connecter)
   * @author Younes CHBADA
   * @version 1.0
   * */
  constructor(private http: Http) {
  }

  login(credentials) {
    console.log(credentials);
    return this.http.post('http://localhost:8000/api/v1/login',credentials)
      .map( r => {
        console.log(r.headers);
        let result = r.headers.toJSON();
        if ( result && result.authorization) {
          localStorage.setItem('token', result.authorization.toString());
          console.log(localStorage.getItem('token'));
          return true;
        }
        return false;
      });
  }

  /**
   * Logout() supprime le token du localStorage
   * empechant donc l'acces a l'application ou la possiblite
   * d'envoyer des requete a l'API
   * @author Younes CHBADA
   * @version 1.0
   * */
  logout() {
    localStorage.removeItem('token');
  }

  /**
   * Fonction de lib angular2-jwt verifiant la
   * validité du token
   * @author Younes CHBADA
   * @version 1.0
   * */
  isLoggedIn() {
    return tokenNotExpired();
  }

  /**
   * Fonction de lib angular2-jwt verifiant la
   * validité du token
   * @author Younes CHBADA
   * @version 1.0
   * */
  get currentUser() {
    let token = localStorage.getItem('token');
    if (!token) return null;

    return new JwtHelper().decodeToken(token);
  }
}

