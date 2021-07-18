import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsMainComponent } from './visitors-main.component';

describe('VisitorsMainComponent', () => {
  let component: VisitorsMainComponent;
  let fixture: ComponentFixture<VisitorsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
