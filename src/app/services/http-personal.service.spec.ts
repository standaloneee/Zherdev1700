import { TestBed } from '@angular/core/testing';

import { HttpPersonalService } from './http-personal.service';

describe('HttpPersonalService', () => {
  let service: HttpPersonalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpPersonalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
