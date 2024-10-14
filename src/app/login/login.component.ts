import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        // Redireccionar al dashboard o página deseada tras el login exitoso
        this.router.navigate(['/main-user-page']);
      },
      error => {
        // Manejar el error, mostrar un mensaje, etc.
        this.errorMessage = 'Incorrect credentials. Please try again..';
      }
    );
  }
}
