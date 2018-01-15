import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './services/auth-guard.service';
import {AdminAuthGuard} from './services/admin-auth-guard.service';
import {AuthService} from './services/auth.service';
import { HeaderComponent } from './header/header.component';
import { LinkComponent } from './link/link.component';
import {DataMicrosoftService} from './services/data-microsoft/data-microsoft.service';
import {DataOracleService} from './services/data-oracle/data-oracle.service';
import { FilterPipeModule } from 'ngx-filter-pipe';
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  {path: 'link', component: LinkComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'no-access', component: NoAccessComponent},
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
    LinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FilterPipeModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot( appRoutes)
  ],
  providers: [
    AuthGuard,
    AuthService,
    AdminAuthGuard,
    DataMicrosoftService,
    DataOracleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
