import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { LoginDTO } from '../login-dto';
import { TokenService } from '../services/token.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  loginForm: FormGroup;

  constructor(private authService: AuthService, private tokenService: TokenService) {}
  
  public login() {

    const loginDTO = this.loginForm.value as LoginDTO;
   
   
    this.authService.login(loginDTO).subscribe({
      next: (data) => {
        this.tokenService.login(data.respuesta.token);
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.error.respuesta
      });
    },
  });
}

}