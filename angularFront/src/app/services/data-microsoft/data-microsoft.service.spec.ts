import { TestBed, inject } from '@angular/core/testing';

import { DataMicrosoftService } from './data-microsoft.service';

describe('DataMicrosoftService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataMicrosoftService]
    });
  });

  it('should be created', inject([DataMicrosoftService], (service: DataMicrosoftService) => {
    expect(service).toBeTruthy();
  }));
});
