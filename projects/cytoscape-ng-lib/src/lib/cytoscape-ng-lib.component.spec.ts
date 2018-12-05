import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CytoscapeNgLibComponent } from './cytoscape-ng-lib.component';

describe('CytoscapeNgLibComponent', () => {
  let component: CytoscapeNgLibComponent;
  let fixture: ComponentFixture<CytoscapeNgLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CytoscapeNgLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CytoscapeNgLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
