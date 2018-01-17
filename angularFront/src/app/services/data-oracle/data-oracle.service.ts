import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class DataOracleService {

  private headers;
  private option;
  private token;

  /**
   * Constructor recupère le token en localStorage et lui ajoute la string 'Bearer' pour le mettre
   * a la norme attendu par l'Api
   * cree le header en y incluant le Content Type et  le token
   * variable 'this.option' contient donc toute les information necessaire a l'authentification de la
   * req auprès de l'API.
   * @author Younes CHBADA
   * @version 1.0
   * */
  constructor(private http: Http) {
    this.token = 'Bearer ' + localStorage.getItem('token');
    this.headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: this.token
    });
    this.option = {headers: this.headers};
  }


  /**
   * Envoie la requête GET a l'API (en format JSON) et y ajoute (this.option) pour l'auth.
   * récupère la réponse en JSON.
   * On obtient la liste des affaires.
   * @see Affaire
   * @author Younes CHBADA
   * @version 1.0
   */
  getAffaires() {
    return this.http.get(environment.affaire, this.option)
      .map(response => response.json());
  }

}