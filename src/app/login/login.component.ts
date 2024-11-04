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
        // Verificar el rol del usuario y redirigir en consecuencia
        const userRole = this.authService.getUserRole();
        if (userRole === 'admin') {
          this.router.navigate(['/employee-main-page']); // Redirigir a la página de administrador
        } else {
          this.router.navigate(['/main-user-page']); // Redirigir a la página estándar
        }
      },
      error => {
        
        this.errorMessage = 'Incorrect credentials. Please try again.';
      }
    );
  }
}
