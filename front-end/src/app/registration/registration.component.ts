import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Angular Router
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  email: string = '';
  password: string = '';
  registrationMessage: string = '';

  constructor(private registrationService: RegistrationService, private router: Router) { } // Inject Router service

  onRegister(): void {
    this.registrationService.register(this.email, this.password)
      .subscribe(
        (response) => {
          console.log('Registration successful');
          this.registrationMessage = response.message;
          // Clear form fields after successful registration
          this.email = '';
          this.password = '';
          // Redirect to another page after successful registration
          this.router.navigate(['signin']); // Replace '/homepage' with your desired route
        },
        (error) => {
          this.registrationMessage = 'Registration failed: ' + error.error.message;
        }
      );
  }
}
