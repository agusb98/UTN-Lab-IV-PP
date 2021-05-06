import { NgModule } from '@angular/core';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { UserRegisterComponent } from './user-register/user-register.component';

//  Send unauthorized users to login
const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['user/login']);

//  Automatically log in users
const redirectLoggedInToHome = () =>
  redirectLoggedInTo(['bienvenido']);

const routes: Routes = [
  { path: '', redirectTo: 'login' },
  { path: 'login', component: UserLoginComponent, ...canActivate(redirectLoggedInToHome) },
  { path: 'register', component: UserRegisterComponent, ...canActivate(redirectLoggedInToHome) },
  { path: 'logout', component: UserLogoutComponent, ...canActivate(redirectUnauthorizedToLogin) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
