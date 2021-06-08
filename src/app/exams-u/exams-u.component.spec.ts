import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsUComponent } from './exams-u.component';

describe('ExamsUComponent', () => {
  let component: ExamsUComponent;
  let fixture: ComponentFixture<ExamsUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamsUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamsUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
