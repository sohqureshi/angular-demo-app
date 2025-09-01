import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_EMAIL_KEY = 'user_email';

  constructor(private http: HttpClient, private cookie: CookieService) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post('/api/login', { email, password });
  }

  setToken(token: string, email: string) {
    this.cookie.set(this.TOKEN_KEY, token);
    this.cookie.set(this.USER_EMAIL_KEY, email);
  }

  getToken(): string {
    return this.cookie.get(this.TOKEN_KEY);
  }

  getUserEmail(): string {
    return this.cookie.get(this.USER_EMAIL_KEY);
  }

  getUserName(): string {
    const email = this.cookie.get(this.USER_EMAIL_KEY);
    if (!email) {
      return '';
    }
    const namePart = email.split('@')[0].toUpperCase();
    // Convert to camelCase, e.g., "john.doe" or "john-doe" becomes "johnDoe"
    return namePart.replace(/[\._-]([a-z])/g, (g) => g[1].toUpperCase());
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated();
  }

  logout() {
    this.cookie.delete(this.TOKEN_KEY);
    this.cookie.delete(this.USER_EMAIL_KEY);
  }
}
