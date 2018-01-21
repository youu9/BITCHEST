import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import {FormsModule, NgForm} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './services/auth-guard.service';
import {AdminAuthGuard} from './services/admin-auth-guard.service';
import {AuthService} from './services/auth.service';
import { HeaderComponent } from './header/header.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import {HttpClientModule} from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { UsersComponent } from './admin/users/users.component';
import {UsersService} from './services/users/users.service';
import { WalletComponent } from './wallet/wallet.component';
import { TransactionComponent } from './transaction/transaction.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {path: 'admin', component: AdminComponent,
    canActivate: [AuthGuard,// AdminAuthGuard
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'wallet', component: WalletComponent},
  {path: 'transaction', component: TransactionComponent},
  {path: 'no-access', component: NoAccessComponent},
  //{path: 'notfound', component: NotFoundComponent}
  {path: 'dashboard', component: LineChartComponent,
    canActivate: [AuthGuard, //AdminAuthGuard
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    NotFoundComponent,
    NoAccessComponent,
    HeaderComponent,
    LineChartComponent,
    UsersComponent,
    WalletComponent,
    TransactionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FilterPipeModule,
    HttpModule,
    HttpClientModule,
    ChartsModule,
    RouterModule.forRoot( appRoutes)
  ],
  providers: [
    AuthGuard,
    AuthService,
    UsersService,
    AdminAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
