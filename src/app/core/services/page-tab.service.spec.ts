import { TestBed } from '@angular/core/testing';

import { PageTabService } from './page-tab.service';

describe('PageTabService', () => {
  let service: PageTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
