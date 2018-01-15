import { TestBed, inject } from '@angular/core/testing';

import { DataOracleService } from './data-oracle.service';

describe('DataOracleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataOracleService]
    });
  });

  it('should be created', inject([DataOracleService], (service: DataOracleService) => {
    expect(service).toBeTruthy();
  }));
});
