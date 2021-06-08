import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamResultsCComponent } from './exam-results-c.component';

describe('ExamResultsCComponent', () => {
  let component: ExamResultsCComponent;
  let fixture: ComponentFixture<ExamResultsCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamResultsCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamResultsCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
