import { TestBed } from '@angular/core/testing';

import { SignupService } from './signupservice.service';

describe('MyserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignupService = TestBed.get(SignupService);
    expect(service).toBeTruthy();
  });
});
