import { TestBed } from '@angular/core/testing';

import { WerehouseService } from './werehouse.service';

describe('WerehouseService', () => {
  let service: WerehouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WerehouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
