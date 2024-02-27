import { Component } from '@angular/core';
import { LsnavbarComponent } from "../lsnavbar/lsnavbar.component";
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],  // Corrected property name
    imports: [LsnavbarComponent, FormsModule]
})
export class LoginComponent {

    // Add properties for username and password
    username: string = '';
    password: string = '';
  
    constructor(private router: Router) { }
  
    // Function to handle login
    login() {
      console.log('Login button clicked!');

      console.log('Username:', this.username);
      console.log('Password:', this.password);
  
      console.log('Navigating to ehome');

      // Check username and password and navigate accordingly
      if (this.username === 'test1@gmail.com' && this.password === '123456') {
        this.router.navigate(['/ehome']);
      } else if (this.username === 'test2@gmail.com' && this.password === '123456') {
        this.router.navigate(['/phome']);
      } else if (this.username === 'test3@gmail.com' && this.password === '123456') {
        this.router.navigate(['/ihome']);
      } else {
        // Handle invalid login
        alert('Invalid username or password');
      }
    }

  openForgotPasswordDialog() {
    //logic for opening the forgot password dialog here
    console.log('Forgot Password clicked!');
  }
}
