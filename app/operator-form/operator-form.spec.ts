import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorForm } from './operator-form';

describe('OperatorForm', () => {
  let component: OperatorForm;
  let fixture: ComponentFixture<OperatorForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperatorForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
