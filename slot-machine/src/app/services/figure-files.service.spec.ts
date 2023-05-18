import { TestBed } from '@angular/core/testing';

import { FigureFilesService } from './figure-files.service';

describe('FigureFilesService', () => {
  let service: FigureFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FigureFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
