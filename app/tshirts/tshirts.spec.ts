import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tshirts } from './tshirts';

describe('Tshirts', () => {
  let component: Tshirts;
  let fixture: ComponentFixture<Tshirts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tshirts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tshirts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
