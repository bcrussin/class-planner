import { TestBed } from '@angular/core/testing';

import { ClassTagsService } from './class-tags.service';

describe('ClassTagsService', () => {
  let service: ClassTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
