import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordForgotComponent } from './password-forgot/password-forgot.component';
import { MainUserPageComponent } from './main-user-page/main-user-page.component';
import { BaggageCheckinComponent } from './baggage-checkin/baggage-checkin.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EmployeeMainPageComponent } from './employee-main-page/employee-main-page.component';
import { CrewAssignComponent } from './crew-assign/crew-assign.component';
import { ClientTripComponent } from './client-trip/client-trip.component';
import { ParkingLotComponent } from './parking-lot/parking-lot.component';
import { CarQueueComponent } from './car-queue/car-queue.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PasswordForgotComponent,
    MainUserPageComponent,
    BaggageCheckinComponent,
    EmployeeMainPageComponent,
    CrewAssignComponent,
    ClientTripComponent,
    ParkingLotComponent,
    CarQueueComponent 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule
    
  
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
