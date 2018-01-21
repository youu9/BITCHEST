import { TestBed, inject } from '@angular/core/testing';

import { ClientAuthGuard } from './client-auth-guard.service';

describe('ClientAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientAuthGuard]
    });
  });

  it('should be created', inject([ClientAuthGuard], (service: ClientAuthGuard) => {
    expect(service).toBeTruthy();
  }));
});
