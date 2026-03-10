import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDetails2 } from './courses-details2';

describe('CoursesDetails2', () => {
  let component: CoursesDetails2;
  let fixture: ComponentFixture<CoursesDetails2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesDetails2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesDetails2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
