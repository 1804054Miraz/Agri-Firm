
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlowerService } from '../services/flower.service';

@Component({
  selector: 'app-flowerspost',
  templateUrl: './flowerspost.component.html',
  styleUrls: ['./flowerspost.component.css']
})
export class FlowerspostComponent {
  email: string = '';
  password: string = '';
  comment: string = ''
  fname: string = '';
  fage:string = ''
  signinMessage: string = '';
  
  constructor(private flowerservice: FlowerService, private router: Router) { }

  onFlowerPostIn(): void {
    this.flowerservice.flowerpostin(this.email, this.password, this.comment, this.fname, this.fage)
      .subscribe(
        (response) => {
          console.log('Sign-in successful:', response);
          // Redirect to the homepage
          this.router.navigate(['home'], { queryParams: { email: this.email } });
        },
        (error) => {
          console.error('Sign-in failed:', error);
          // Display an error message to the user
          this.signinMessage = 'Sign-in failed: ' + error.message;
        }
      );
  }
  

}