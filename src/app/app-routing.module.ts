import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PasswordForgotComponent } from './password-forgot/password-forgot.component'; 
import { RegisterComponent } from './register/register.component'; 
import { MainUserPageComponent } from './main-user-page/main-user-page.component';
import { EmployeeMainPageComponent } from './employee-main-page/employee-main-page.component'; 
import { BaggageCheckinComponent } from './baggage-checkin/baggage-checkin.component'; 
import { CrewAssignComponent } from './crew-assign/crew-assign.component';
import { ClientTripComponent } from './client-trip/client-trip.component';




const routes: Routes = [
  { path: '', component: EmployeeMainPageComponent }, 
  { path: 'baggage-checkin', component: BaggageCheckinComponent },
  { path: '', component: LoginComponent },
  { path: 'password-forgot', component: PasswordForgotComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'main-user-page', component: MainUserPageComponent},
  {path: 'crew-assign', component: CrewAssignComponent},
  {path:'client-trip',component:ClientTripComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
