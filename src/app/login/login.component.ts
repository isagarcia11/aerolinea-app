import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor() {}

  onSubmit() {
    
    // Solo para el ejemplo
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    if (username && password) {
      console.log('Username:', username);
      console.log('Password:', password);
      alert('Login successful!'); 
    } else {
      alert('Please fill in all fields.');
    }
  }

  forgotPassword() {
    alert('Password recovery process will be initiated.');
  }

}
