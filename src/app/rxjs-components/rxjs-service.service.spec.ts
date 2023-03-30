import { TestBed } from '@angular/core/testing';

import { RxjsServiceService } from './rxjs-service.service';

describe('RxjsServiceService', () => {
  let service: RxjsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
