// registration.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private apiUrl = 'http://localhost:3000/register'; // Update with your server URL

  constructor(private http: HttpClient) {}

  register(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post<any>(this.apiUrl, body);
  }
}
