import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-access',
  templateUrl: './no-access.component.html',
  styleUrls: ['./no-access.component.css']
})
export class NoAccessComponent implements OnInit {

  /**
   * Component prévu pour la redirection d'utilisateur identifié mais n'ayant pas les droit
   * d'accès a la ressource demander.
   * (Pas encore implémenté )
   * @author Younes CHBADA
   * @version 1.0
   * */
  constructor() { }

  ngOnInit() {
  }

}
