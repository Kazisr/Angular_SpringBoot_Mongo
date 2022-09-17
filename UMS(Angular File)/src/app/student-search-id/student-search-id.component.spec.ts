import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSearchIdComponent } from './student-search-id.component';

describe('StudentSearchIdComponent', () => {
  let component: StudentSearchIdComponent;
  let fixture: ComponentFixture<StudentSearchIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSearchIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentSearchIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
