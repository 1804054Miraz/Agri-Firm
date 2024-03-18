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
    // Clear any stored user data or tokens
    localStorage.removeItem('token');
    
    // Skip navigation history when redirecting to the sign-in page
    const navigationExtras = {
      replaceUrl: true // Replace current URL in history
    };
    this.router.navigate(['/signin'], navigationExtras);
  }
}
