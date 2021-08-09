import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {HomeGuard} from './home.guard';
import {LoginGuard} from './login.guard';

const routes: Routes = [
  {path: '', component: HomePageComponent, canActivate: [HomeGuard]},
  {path: 'login', component: LoginPageComponent, canActivate: [LoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
