
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlowerService {

  private apiUrl = 'http://localhost:3000/flowerpostin'; // Update with your server URL

  constructor(private http: HttpClient) {}

  flowerpostin(email: string, password: string, comment: string, fname:string, fage:string): Observable<any> {
    const body = { email, password, comment, fname, fage };
    return this.http.post<any>(this.apiUrl, body);
  }
}