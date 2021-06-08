import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamResultsEditComponent } from './exam-results-edit.component';

describe('ExamResultsEditComponent', () => {
  let component: ExamResultsEditComponent;
  let fixture: ComponentFixture<ExamResultsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamResultsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamResultsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
