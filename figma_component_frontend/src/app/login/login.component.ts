/* global window */
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [FormsModule]
})
/**
 * LoginComponent
 * 
 * This component renders a login form following minimalistic, modern standards
 * as specified in the project. It uses standalone component style for Angular v15+.
 */
export class LoginComponent {
  username: string = '';
  password: string = '';
  hidePassword: boolean = true;

  // PUBLIC_INTERFACE
  onLogin() {
    // For now, just alert the user input.
    // Replace this with actual authentication logic as needed.
    window.alert(`Username: ${this.username}\nPassword: ${this.password}`);
  }

  // PUBLIC_INTERFACE
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
