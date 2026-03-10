import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePratice } from './service-pratice';

describe('ServicePratice', () => {
  let component: ServicePratice;
  let fixture: ComponentFixture<ServicePratice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePratice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePratice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
