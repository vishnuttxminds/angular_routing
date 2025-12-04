import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('username') username!: ElementRef;
  @ViewChild('password') password!: ElementRef;

  authService: AuthService = inject(AuthService);

  onLoginClicked() {
    const userName = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;
    
    const success = this.authService.login(userName, password);

    if (!success) {
      alert('Login failed');
    } else {
      alert('Login success');
    }
  }
}
