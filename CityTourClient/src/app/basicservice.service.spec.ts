import { TestBed } from '@angular/core/testing';

import { BasicserviceService } from './basicservice.service';

describe('BasicserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicserviceService = TestBed.get(BasicserviceService);
    expect(service).toBeTruthy();
  });
});
