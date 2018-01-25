import { Injectable, OnInit } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Router} from "@angular/router";
import { AuthService } from '../auth.service';
@Injectable()
export class UsersService{

  private headers;
  private option;
  private token;
  public walletSold;

  /**
   * Constructor recupère le token en localStorage et lui ajoute la string 'Bearer' pour le mettre
   * a la norme attendu par l'Api
   * cree le header en y incluant le Content Type et  le token
   * variable 'this.option' contient donc toute les information necessaire a l'authentification de la
   * req auprès de l'API.
   * @author Younes CHBADA
   * @version 1.0
   * */
  constructor(private http: Http,
              private route: Router,
              private authService: AuthService) {
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      this.headers = new Headers({
        'Content-Type': 'application/json',
        Authorization: this.token
      });
      this.option = {headers: this.headers};
    }else{
      this.token = this.authService.token;
      this.headers = new Headers({
        'Content-Type': 'application/json',
        Authorization: this.token
      });
      this.option = {headers: this.headers};
    }
    
  }

  /**
   * Envoie la requête GET a l'API (en format JSON) et y ajoute (this.option) pour l'auth.
   * récupère la réponse en JSON.
   * On obtient la liste des affaires.
   * @see Affaire
   * @author Younes CHBADA
   * @version 1.0
   */
  getUsers() {
    return this.http.get('bitchest/v1/users', this.option)
      .map(response => response.json());
  }

  getCurrencies() {
    return this.http.get( 'bitchest/v1/currencies', this.option)
      .map(response => response.json());
  }

  getUser(id) {
    return this.http.get('bitchest/v1/user/' + id, this.option)
      .map(response => response.json());
  }

  saveUser(user, id){
    return this.http.post('bitchest/v1/user/' + id, user, this.option)
      .map(response => response.json());
  }
  addUser(user){
    return this.http.post('bitchest/v1/user/', user, this.option)
      .map(response => response.json());
  }
  deleteUser(id){
    return this.http.delete('bitchest/v1/user/' + id, this.option)
      .map(response => response.json());
  }

  getUserWallet(){
    return this.http.get('bitchest/v1/wallet', this.option)
      .map(response => response.json());
  }

  getCurrency(id){
    return this.http.get('bitchest/v1/currency/' + id, this.option)
      .map(response => response.json());
  }

  getCurrencyTransaction(id){
    return this.http.get('bitchest/v1/currency/' + id + '/transactions', this.option)
      .map(response => response.json());
  }

  buy(items){
    return this.http.post('bitchest/v1/buy/currency/' + items.currencyId, {'quantity': parseInt(items.quantity)}, this.option)
      .map(response => response.json());
  }

  sell(id){
    return this.http.post('bitchest/v1/sell/transaction/' + id,{ }, this.option)
      .map(response=> response.json());
  }

  myBuy(){
    return this.http.post('bitchest/v1/transactions/', {'state' : 'own'}, this.option)
      .map(response => response.json());
  }
  mySell(){
    return this.http.post('bitchest/v1/transactions/', {'state' : 'sold'}, this.option)
      .map(response => response.json());
  }
}
