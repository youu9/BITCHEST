import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /**
   * Verification de d'utilisateur connecté en fonction de la présence
   * d'un token en localStorage.
   * Redirection vers path: 'login' dans le cas contraire.
   * @see AuthService
   *@author Younes CHBADA
   *@version 1.0*/
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
