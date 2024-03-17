import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from '../services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email: string = '';
  password: string = '';
  signinMessage: string = '';
  
  constructor(private signinService: SigninService, private router: Router) { }

  onSignIn(): void {
    this.signinService.signin(this.email, this.password)
      .subscribe(
        (response) => {
          console.log('Sign-in successful:', response);
          // Redirect to the homepage
          this.router.navigate(['home']); // Replace 'home' with the path to your homepage component
        },
        (error) => {
          console.error('Sign-in failed:', error);
          // Display an error message to the user
          this.signinMessage = 'Sign-in failed: ' + error.message;
        }
      );
  }
}
