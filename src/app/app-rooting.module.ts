import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {PanierComponent} from "./pages/panier/panier.component";
import {NavbarComponent} from "./pages/navbar/navbar.component";
import {TokenGuardService} from "./services/guard/token-guard/token-guard.service";
import {AdminGuardService} from "./services/guard/admin-guard/admin-guard.service";
import {ManageUsersComponent} from "./admin/manage-users/manage-users.component";
import {ConfirmRegisterComponent} from "./pages/confirm-register/confirm-register.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {AdminDashboardComponent} from "./admin/admin-dashboard/admin-dashboard.component";
import {MainAdminComponent} from "./admin/main-admin/main-admin.component";
import {MenuComponent} from "./compenent/menu/menu.component";


const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'panier', component: PanierComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'confirm-register', component: ConfirmRegisterComponent},

  {
    path: 'admin',
    component: MainAdminComponent,
    canActivate: [AdminGuardService, TokenGuardService],
    children: [

      {
        path: 'users',
        component: ManageUsersComponent
      }, {
        path: 'dashboard',
        component: AdminDashboardComponent
      },
      {path: 'profile', component: ProfileComponent},
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'user',
    component: ProfileComponent,
    canActivate: [TokenGuardService],
    children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'panier', component: PanierComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
