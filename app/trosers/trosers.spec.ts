import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trosers } from './trosers';

describe('Trosers', () => {
  let component: Trosers;
  let fixture: ComponentFixture<Trosers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trosers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trosers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
