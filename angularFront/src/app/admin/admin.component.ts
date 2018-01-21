//import { OrderService } from './../services/order.service';
import { Component, OnInit } from '@angular/core';
/**
 * Component Admin qui n'est pas encore plug, mais fonctionnel pour quand on recupérera
 * le role de l'utilisitateur. ( admin ou autre ) la logique est là :)
 *
 * */
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  //orders: any[];

  constructor(/*private orderService: OrderService*/) {
    // override the route reuse strategy
  }

  ngOnInit() {
    //this.orderService.getOrders()
    //  .subscribe(orders => this.orders = orders);
  }
}
