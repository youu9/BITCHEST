import { Component, OnInit } from '@angular/core';
import {DataMicrosoftService} from '../services/data-microsoft/data-microsoft.service';
import {DataOracleService} from '../services/data-oracle/data-oracle.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  /**
   * La liste des opportunites NON LIEES (N.L) à une affaire. Cette liste est une suite d'object de type
   * Opportunites. Elle stock les opportunites retournées par le serveur (grâce au DataService). Ainsi
   * dès qu'une opportunité est liée, elle disparaît de cette liste.
   * @see Opportunites
   * @see DataService
   * @author Younes CHBADA
   *@version 1.0
   * */

  opportunites: Opportunites [];


  /**
   * La liste de TOUTES les affaires, par conséquent dès qu'une affaires est liée, elle continue à apparaître dans
   * cette liste. Cette liste est une suite d'object de type Affaires. Elle stock les affaires retournées par le
   * serveur (grâce au DataService).
   * @see Affaires
   * @see DataService
   * @author Younes CHBADA
   * @version 1.0
   * */
  affaires: Affaires [];

  constructor(private dataOracleService: DataOracleService,
              private dataMicrosoftService: DataMicrosoftService) {
    console.log('Constructeur dataService en cours');
  }

  /**
   * Recupération de la liste de TOUTES les opportunitées de la base MicrosoftSql via dataMicrosoftService.
   * Cette liste est une suite d'object de type Opportunites.
   * Elle stock les opportunites retournées par l' Api.
   * Recupération de la liste de TOUTES les affaires de la base Oracle via dataOracleService.
   * Cette liste est une suite d'object de type Affaires.
   * Elle stock les opportunites retournées par l' Api.
   * @see Affaires
   * @see Opportunites
   * @see DataService
   * @author Younes CHBADA
   * @version 1.0
   * */
  ngOnInit() {
    const messageErreur = 'Une erreur inatendu c est produite: vérifiez si le ' +
      'serveur fonctionne ou bien que vous êtes correctement connect';
    /* recuperation des données issus du dataService*/
    this.dataMicrosoftService.getOpportunity()
      .subscribe((opportunites) => {         // fonction qui est activée lorque le client reçoit le réponse du serveur (cela peut prendre du temps)
        this.opportunites = opportunites;          // la réponse du serveur est stockée dans une variable
        console.log("opportunitées chargé")
      }, error => { // gestion des erreurs
        console.log(messageErreur);
      });

    this.dataOracleService.getAffaires()
      .subscribe((affaires) => {
        this.affaires = affaires;
        console.log("Affaire chargé")
      }, error => {
        console.log(messageErreur);
      });
  }
}

/**
 * Classe abstraite qui permet de définir une opportunité.
 * Une opportunité est créée depuis SalesForce, puis elle est stockée dans la BDD Microsoft.
 * Lors de la création d'une opportunité chaque attribut doit être initialisé.
 * @author Younes CHBADA
 * @version 1.0
 * */


  interface Opportunites {
  /**
   *
   */
  CLI_IDENT_SF: string;
  OPPO_IDENTIF: string;
  OPPO_NAME: string;
  IA: string;
}

interface Affaires {
  CD_AFFAIRE: number;
  CD_CLIENT: number;
  NOM_AFFAIRE: string;
}
