import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  signupForm: FormGroup;
  
  constructor(private router: Router, private fb: FormBuilder) {
    if (this.fb) {
      this.signupForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      }, { validator: this.checkPasswords });
    }
  }

// Función para comparar las contraseñas
  checkPasswords(group: FormGroup) {
  const password = group.get('password')?.value;
  const confirmPassword = group.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { notSame: true };
}

// Acción al enviar el formulario
  onSubmit() {
  if (this.signupForm.valid) {
    // Aquí puedes agregar la lógica de envío de datos o redirigir al usuario
    console.log('Formulario válido', this.signupForm.value);
    //this.clientService.register(this.signupForm)
    this.router.navigate(['/login']);
  } else {
    console.log('Formulario inválido');
  }
}
  navigateToOther(): void {
    this.router.navigate(['/main-user-page']);  
  }

}
