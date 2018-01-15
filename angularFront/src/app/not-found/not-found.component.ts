import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  /**
   * Component prévu pour la redirection d'utilisateur en cas d'erreur
   * d'accès a la ressource demander.
   * (Pas encore implémenté )
   * @author Younes CHBADA
   * @version 1.0
   * */
  constructor() { }

  ngOnInit() {
  }

}
