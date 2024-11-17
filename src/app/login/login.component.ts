import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { LoginDTO } from '../login-dto';
import { TokenService } from '../services/token.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  loginForm: FormGroup;

  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router) {}
  
  public login() {
    const loginDTO = this.loginForm.value as LoginDTO;
    
    this.authService.login(loginDTO).subscribe({
      next: (data) => {
        Swal.fire({
          title: 'Login sucessful',
          text: 'The credentials are valid',
          icon: 'success',
          confirmButtonText: "Login",
        });
        
        this.tokenService.setToken(data.respuesta.token);
        const userRole = this.tokenService.getRol();  
        
        if (userRole === 'ADMINISTRADOR') {
          this.router.navigate(['/main-employee-page']);
        } else if (userRole === 'CLIENTE') {
          this.router.navigate(['/main-user-page']);
        }
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.error.respuesta,
          confirmButtonText: 'Try Again',
        });
      },
    });
  }


}