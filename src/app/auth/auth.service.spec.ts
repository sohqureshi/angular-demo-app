import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  let cookieService: CookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService, CookieService]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
    cookieService = TestBed.inject(CookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login and set token', () => {
    service.login('john@example.com', 'john@123').subscribe(res => {
      expect(res.token).toBeDefined();
      service.setToken(res.token, res.user.email);
      expect(cookieService.get('auth_token')).toBe(res.token);
      expect(cookieService.get('user_email')).toBe(res.user.email);
    });
    const req = httpMock.expectOne('/api/login');
    expect(req.request.method).toBe('POST');
    req.flush({ token: 'mock-token', user: { email: 'john@example.com' } });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
