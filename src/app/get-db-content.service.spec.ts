import { TestBed } from '@angular/core/testing';

import { GetDBContentService } from './get-db-content.service';

describe('GetDBContentService', () => {
  let service: GetDBContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDBContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
