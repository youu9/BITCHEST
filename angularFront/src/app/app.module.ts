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
import {ClientAuthGuard} from "./services/client-auth-guard.service";
import { CurrencyInfoComponent } from './currency-info/currency-info.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientComponent } from './client/client.component';

const appRoutes: Routes = [
  {path: 'dashboard', component: HomeComponent,
    canActivate: [AuthGuard]//AdminAuthGuard
  },
  {path: 'profile', component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {path: 'client', component: ClientComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {path: 'admin', component: AdminComponent,
    canActivate: [AuthGuard, AdminAuthGuard
    ]
  },{
   path: 'currency/info/:id/:name', component: CurrencyInfoComponent,
  },
  {path: 'admin1', component: AdminComponent,
    canActivate: [AuthGuard, AdminAuthGuard
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'wallet', component: WalletComponent,
    canActivate: [AuthGuard, ClientAuthGuard]
  },
  {path: 'transaction', component: TransactionComponent,
    canActivate: [AuthGuard, ClientAuthGuard]
  },
  {path: 'no-access', component: NoAccessComponent},
  {path: '',  redirectTo: '/dashboard', pathMatch: 'full'},
  //{path: 'notfound', component: NotFoundComponent}

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
    CurrencyInfoComponent,
    ProfileComponent,
    ClientComponent,
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
    ClientAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
