import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  isTeacher: boolean = false;

  constructor(private router: Router) {}

  handleSubmit(event: Event): void {
    event.preventDefault();
    // Manejar la lógica de inicio de sesión aquí
    console.log('Login submitted', { email: this.email, password: this.password, rememberMe: this.rememberMe, isTeacher: this.isTeacher });

    // Redirigir a otra página después del inicio de sesión si es necesario
    this.router.navigate(['/home-page.component.html']); 
  }
}
