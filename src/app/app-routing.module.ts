import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PasswordForgotComponent } from './password-forgot/password-forgot.component'; 
import { RegisterComponent } from './register/register.component'; 
import { MainUserPageComponent } from './main-user-page/main-user-page.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'password-forgot', component: PasswordForgotComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'main-user-page', component: MainUserPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
