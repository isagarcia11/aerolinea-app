import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CrearUsuarioDTO } from '../crear-usuario-dto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  signupForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    if (this.fb) {
      this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordsMatchValidator });
  }
}

  
  passwordsMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value ? null : { notSame: true };
  }

  public crearUsuario() {
    const crearUsuario = this.signupForm.value as CrearUsuarioDTO;
   
   
    this.authService.crearUsuario(crearUsuario).subscribe({
      next: (data) => {
        Swal.fire({
          title: 'Account has been created',
          text: 'The account has been created correctly',
          icon: 'success',
          confirmButtonText: 'Sign Up'
        })
      },
      error: (error) => {
        Swal.fire({
          title: 'Error',
          text: error.error.respuesta,
          icon: 'error',
          confirmButtonText: 'Sign Up'
        })
      }
    });
   
   
   }
   
   
}
