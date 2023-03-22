import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-rooting.module";
import { HomeComponent } from './pages/home/home.component';
import {LoginComponent} from "./pages/login/login.component";
import { PanierComponent } from './pages/panier/panier.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {HttpInterceptorService} from "./services/http-interceptor/http-interceptor.service";
import {FormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {AdminDashboardComponent} from "./admin/admin-dashboard/admin-dashboard.component";
import {ManageUsersComponent} from "./admin/manage-users/manage-users.component";
import { ConfirmRegisterComponent } from './pages/confirm-register/confirm-register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MainAdminComponent } from './admin/main-admin/main-admin.component';
import { MenuComponent } from './compenent/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PanierComponent,
    NavbarComponent,
    AdminDashboardComponent,
    ManageUsersComponent,
    ConfirmRegisterComponent,
    ProfileComponent,
    MainAdminComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    HttpClient,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
