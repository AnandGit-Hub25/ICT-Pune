import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contact2 } from './contact2';

describe('Contact2', () => {
  let component: Contact2;
  let fixture: ComponentFixture<Contact2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contact2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
