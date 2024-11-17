import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { LoginDTO } from '../login-dto';
import { TokenService } from '../services/token.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; // Inicializar como nullish para evitar errores de compilación
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Inicializar el formulario reactivo
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Campo email con validaciones
      password: ['', [Validators.required, Validators.minLength(6)]] // Campo password con validaciones
    });
  }

  public login(): void {
    if (this.loginForm.invalid) {
      // Mostrar error si el formulario es inválido
      this.errorMessage = 'Please complete all fields correctly';
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: this.errorMessage,
        confirmButtonText: 'Try Again',
      });
      return;
    }

    const loginDTO: LoginDTO = this.loginForm.value as LoginDTO;

    this.authService.login(loginDTO).subscribe({
      next: (data) => {
        // Mostrar éxito
        Swal.fire({
          title: 'Login successful',
          text: 'The credentials are valid',
          icon: 'success',
          confirmButtonText: 'Continue',
        }).then(() => {
          // Redirigir a /client-trip después de oprimir "Continue"
          this.router.navigate(['/client-trip']);
        });
        // Guardar token y redirigir según el rol
        this.tokenService.setToken(data.respuesta.token);
        const userRole = this.tokenService.getRol();

        if (userRole === 'ADMINISTRADOR') {
          this.router.navigate(['/main-employee-page']);
        } else if (userRole === 'CLIENTE') {
          this.router.navigate(['/main-user-page']);
        } else {
          this.errorMessage = 'Role not recognized';
          Swal.fire({
            icon: 'warning',
            title: 'Error',
            text: this.errorMessage,
            confirmButtonText: 'Close',
          });
        }
      },
      error: (error) => {
        // Manejo de errores
        this.errorMessage = error.error.respuesta || 'Unexpected error. Please try again';
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: this.errorMessage,
          confirmButtonText: 'Try Again',
        });
      },
    });
  }
}
