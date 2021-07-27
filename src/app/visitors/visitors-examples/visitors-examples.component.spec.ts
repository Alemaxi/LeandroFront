import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsExamplesComponent } from './visitors-examples.component';

describe('VisitorsExamplesComponent', () => {
  let component: VisitorsExamplesComponent;
  let fixture: ComponentFixture<VisitorsExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorsExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorsExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
