import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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

  onSubmit() {
    if (this.signupForm.valid) {
      const userData = {
        nombre: this.signupForm.get('firstName')?.value,
        apellido: this.signupForm.get('lastName')?.value,
        email: this.signupForm.get('email')?.value,
        password: this.signupForm.get('password')?.value
      };

      this.authService.register(userData).subscribe(
        response => {
          // Redirigir al login o dashboard después del registro exitoso
          this.router.navigate(['/login']);
        },
        error => {
          this.errorMessage = error.error || 'An error occurred. Please try again.';
        }
      );
    }
  }
}
