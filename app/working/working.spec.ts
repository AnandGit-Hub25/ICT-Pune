import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Working } from './working';

describe('Working', () => {
  let component: Working;
  let fixture: ComponentFixture<Working>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Working]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Working);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
