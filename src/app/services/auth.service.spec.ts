import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('login: should return token', () => {
    expect(service).toBeTruthy();
    service.logIn("ruhi@gmail.com", "test").subscribe(res => {
      expect(res).toBeDefined();
      expect(res).toHaveProperty("token");
      expect(res.token).toBeTruthy();
    })
  });
});
