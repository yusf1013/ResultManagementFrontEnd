import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamResultsUComponent } from './exam-results-u.component';

describe('ExamResultsUComponent', () => {
  let component: ExamResultsUComponent;
  let fixture: ComponentFixture<ExamResultsUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamResultsUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamResultsUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
