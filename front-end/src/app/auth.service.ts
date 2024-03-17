// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5038/api';
  private userData: any;

  constructor(private http: HttpClient) {}

  signin(email: string, password: string): Observable<any> {
    const signInUrl = `${this.apiUrl}/signin`;
    const credentials = { email, password };

    return this.http.post(signInUrl, credentials).pipe(
      tap(
        (response) => {
          this.setUserData(response);
        },
        (error) => {
          this.handleError(error);
        }
      )
    );
  }

  setUserData(userData: any): void {
    this.userData = userData;
    localStorage.setItem('authToken', userData.token);
  }

  getUserData(): any {
    return this.userData;
  }

  isAuthenticated(): boolean {
    return !!this.userData && !!this.userData.token;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    // Your error handling logic goes here
    console.error('Error during sign-in:', error);
    return throwError(error);
  }
}
