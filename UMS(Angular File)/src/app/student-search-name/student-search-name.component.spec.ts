import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSearchNameComponent } from './student-search-name.component';

describe('StudentSearchNameComponent', () => {
  let component: StudentSearchNameComponent;
  let fixture: ComponentFixture<StudentSearchNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSearchNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentSearchNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
