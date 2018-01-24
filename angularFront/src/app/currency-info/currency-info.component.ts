import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../services/users/users.service";
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-currency-info',
  templateUrl: './currency-info.component.html',
  styleUrls: ['./currency-info.component.css']
})
export class CurrencyInfoComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  id: number;
  name: string;
  sub: any;
  currencyInfo: any = [];
  currencyTransactions:{};
  currencyQuotations:any [];
  currencyTransactionAdded : Boolean;

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
        .subscribe( currencyTransactions => {
           this.currencyTransactions = currencyTransactions 
           if(currencyTransactions.length != 0){
            this.currencyTransactionAdded = true;
           }
        });
        
  }

  

  initChart(){
    for(let item of this.currencyInfo.quotations){
      this.quotations.push(item.rate);
      this.date.push(item.date);
    }
    this.quotations.reverse();
    this.date.reverse();
    this.chart.chart.update();
    
  }

  // lineChart
  public lineChartData:Array<any> = [
    {data: this.quotations , label: [this.name]},
  ];
  public lineChartLabels:Array<any> = this.date;

  public lineChartOptions:any = {
    responsive: true,
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(1,255,25,0.2)',
      borderColor: 'rgba(1,255,25,1)',
      pointBackgroundColor: 'rgba(1,255,25,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(1,255,25,0.8)'
    },
  ];
  public lineChartLegend:boolean = false;
  public lineChartType:string = 'line';

  public chartHovered(e:any):void {
    console.log(e);
  }
}
