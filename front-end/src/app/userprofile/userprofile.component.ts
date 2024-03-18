import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router
import { UserProfileService } from '../services/userprofile.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserProfileComponent implements OnInit {
  userProfile: any;
  email?: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router, // Inject Router
    private userProfileService: UserProfileService
  ) {}

  ngOnInit(): void {
    // Get user email from route params
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.getUserProfile();
    });
  }

  getUserProfile(): void {
    if (this.email) {
      this.userProfileService.getUserProfile(this.email).subscribe(
        (user) => {
          this.userProfile = user;
        },
        (error) => {
          console.error('Error fetching user profile:', error);
        }
      );
    } else {
      console.error('Email is undefined.');
    }
  }

  logout(): void {
    // Clear user session data
    // For example, you can clear localStorage or sessionStorage
    localStorage.removeItem('currentUser'); // Assuming user session data is stored in localStorage

    // Redirect user to sign-in page
    this.router.navigate(['/signin']); // Replace '/signin' with your actual sign-in route
  }
}
