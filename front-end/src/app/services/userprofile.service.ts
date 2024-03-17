import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private apiUrl = 'http://localhost:3000/api'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getUserProfile(email: string): Observable<any> {
    // Assuming your API endpoint to fetch user profile data is '/userprofile'
    return this.http.get<any>(`${this.apiUrl}/userprofile/${email}`);
  }
}
