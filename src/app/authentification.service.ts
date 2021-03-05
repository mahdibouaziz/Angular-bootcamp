import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  link = 'http://localhost:3000/api/Users/login';
  constructor(private http: HttpClient) {}

  isLogged(): boolean {
    return !!localStorage.getItem('token');
  }

  login(credentials): Observable<any> {
    return this.http.post(this.link, credentials);
  }
  logout(): void {
    localStorage.removeItem('token');
  }
}
