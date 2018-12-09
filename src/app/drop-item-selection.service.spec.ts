import { TestBed } from '@angular/core/testing';

import { DropItemSelectionService } from './drop-item-selection.service';

describe('DropItemSelectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DropItemSelectionService = TestBed.get(DropItemSelectionService);
    expect(service).toBeTruthy();
  });
});
