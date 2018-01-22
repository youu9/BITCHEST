import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../services/users/users.service";

@Component({
  selector: 'app-currency-info',
  templateUrl: './currency-info.component.html',
  styleUrls: ['./currency-info.component.css']
})
export class CurrencyInfoComponent implements OnInit {

  id: number;
  name: string;
  sub: any;
  currencyInfo: any = [];
  currencyTransactions:any [];
  currencyQuotations:any [];

  quotations= [];
  date= [];

  constructor(private route: ActivatedRoute,
              private userService: UsersService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.name = params['name'];
    });

    this.userService.getCurrency(this.id)
        .subscribe(currencyInfo => {
          this.currencyInfo = currencyInfo.currency;
          this.initChart();
        });

      this.userService.getCurrencyTransaction(this.id)
        .subscribe( currencyTransactions => this.currencyTransactions = currencyTransactions );

  }

  initChart(){
    for(let item of this.currencyInfo.quotations){
      this.quotations.push(item.rate);
      this.date.push(item.date);
      this.quotations.reverse();
      this.date.reverse();
    }
    console.log(this.date);
  }

  // lineChart
  public lineChartData:Array<any> = [
    {data: this.quotations , label: [this.name]},
  ];
  public lineChartLabels:Array<any> = this.date;

  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public chartHovered(e:any):void {
    console.log(e);
  }
}
