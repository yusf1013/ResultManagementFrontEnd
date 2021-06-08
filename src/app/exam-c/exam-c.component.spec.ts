import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCComponent } from './exam-c.component';

describe('ExamCComponent', () => {
  let component: ExamCComponent;
  let fixture: ComponentFixture<ExamCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
