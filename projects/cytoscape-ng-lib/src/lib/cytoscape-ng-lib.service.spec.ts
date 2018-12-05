import { TestBed } from '@angular/core/testing';

import { CytoscapeNgLibService } from './cytoscape-ng-lib.service';

describe('CytoscapeNgLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CytoscapeNgLibService = TestBed.get(CytoscapeNgLibService);
    expect(service).toBeTruthy();
  });
});
