import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsCommentsComponent } from './visitors-comments.component';

describe('VisitorsCommentsComponent', () => {
  let component: VisitorsCommentsComponent;
  let fixture: ComponentFixture<VisitorsCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorsCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorsCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
