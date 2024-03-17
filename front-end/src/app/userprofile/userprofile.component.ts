// userprofile.component.ts

import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../services/userprofile.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserProfileComponent implements OnInit {
  userProfile: any;

  constructor(private userProfileService: UserProfileService) {}

  ngOnInit(): void {
    // Assuming you have the user's email (retrieve it from AuthService or another source)
    const userEmail = 'user@example.com';

    this.userProfileService.getUserProfile(userEmail).subscribe(
      (user) => {
        this.userProfile = user;
      },
      (error) => {
        console.error('Error fetching user profile:', error);
      }
    );
  }
}
