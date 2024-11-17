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
    // Verifica si el formulario es válido antes de intentar crear el usuario
    if (this.signupForm.invalid) {
      return; // Si el formulario no es válido, no hacemos nada
    }
  
    // Obtener los datos del formulario como un objeto DTO
    const crearUsuario = this.signupForm.value as CrearUsuarioDTO;
  
    // Llamar al servicio para crear el usuario
    this.authService.crearUsuario(crearUsuario).subscribe({
      next: (data) => {
        // Verificar si la respuesta contiene el campo 'respuesta'
        if (data?.respuesta) {
          // Si se crea el usuario correctamente, muestra un mensaje de éxito
          Swal.fire({
            title: 'Cuenta creada con éxito',
            text: 'Tu cuenta ha sido creada correctamente.',
            icon: 'success',
            confirmButtonText: 'Ir al Login'
          }).then(() => {
            // Redirige al usuario al login después de un registro exitoso
            this.router.navigate(['/login']);
          });
        }
      },
      error: (error) => {
        // Manejo de error: muestra el mensaje que viene del backend
        let errorMessage = 'Error desconocido. Por favor, intente más tarde.';
  
        // Si el backend devuelve un mensaje de error en 'respuesta', mostrarlo
        if (error?.error?.respuesta) {
          errorMessage = error.error.respuesta;
        }
  
        // Mostrar el mensaje de error usando Swal
        Swal.fire({
          title: 'Error',
          text: errorMessage,
          icon: 'error',
          confirmButtonText: 'Cerrar'
        });
      }
    });
  }
   
   
}
