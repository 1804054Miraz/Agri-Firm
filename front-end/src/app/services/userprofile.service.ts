// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class UserprofileService {
//   private apiUrl = 'http://localhost:5038/api/userprofile'; // Adjust the URL based on your backend API

//   constructor(private http: HttpClient) {}

//   getUserProfile(username?: string, email?: string): Observable<any> {
//     // Set up the parameters based on provided username or email
//     let params = new HttpParams();
//     if (username) {
//       params = params.set('username', username);
//     }
//     if (email) {
//       params = params.set('email', email);
//     }

//     // Make the HTTP request to fetch user profile data
//     return this.http.get<any>(this.apiUrl, { params });
//   }
// }

// userprofile.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  private apiUrl = 'http://localhost:3000/api/userprofile'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  getUserProfile(email: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?email=${email}`);
  }
}
