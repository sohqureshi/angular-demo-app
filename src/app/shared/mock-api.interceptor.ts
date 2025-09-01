import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MockApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Mock login
    if (req.url.endsWith('/api/login') && req.method === 'POST') {
      const { email, password } = req.body;
      if (email === 'john@example.com' && password === 'john@123') {
        return of(
          new HttpResponse({
            status: 200,
            body: {
              token: 'mock-token-123',
              user: { email }
            }
          })
        ).pipe(delay(800));
      } else {
        return throwError(() => ({ status: 401, error: { message: 'Invalid credentials' } }));
      }
    }
    // Mock items
    if (req.url.endsWith('/api/items') && req.method === 'GET') {
      return of(
        new HttpResponse({
          status: 200,
          body: [
            { id: 1, name: 'Item One', description: 'Description for item one.' },
            { id: 2, name: 'Item Two', description: 'Description for item two.' },
            { id: 3, name: 'Item Three', description: 'Description for item three.' }
          ]
        })
      ).pipe(delay(1000));
    }
    // Pass through other requests
    return next.handle(req);
  }
}
