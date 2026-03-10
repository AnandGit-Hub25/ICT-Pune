import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employee1 } from './employee1';

describe('Employee1', () => {
  let component: Employee1;
  let fixture: ComponentFixture<Employee1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employee1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Employee1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
