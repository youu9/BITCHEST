import { Injectable } from '@angular/core';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  token : string;
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
  constructor(private http: Http,
              private route: Router,
              ) {
  }

  login(credentials) {
    return this.http.post(environment.login, credentials)
      .map( (r: Response) => {
        
        
        let result = r.headers.toJSON();
        let body = JSON.parse(r['_body']);
        if ( result && result.authorization) {
          
          localStorage.setItem('token', result.authorization.toString());
          localStorage.setItem('id', body.user.id);
          localStorage.setItem('role', body.user.role);
          this.token =  result.authorization.toString();
          return body;
        }
        return body;
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
    localStorage.removeItem('id');
    localStorage.removeItem('role');

    this.route.navigate(['/login']);
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

  isAdmin(){
    if(localStorage.getItem('role') === 'Admin') return true;
    return false;
  }

  isClient(){
    if(localStorage.getItem('role') === 'Client') return true;
    return false;
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

