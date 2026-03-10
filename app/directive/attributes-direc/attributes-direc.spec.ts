import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributesDirec } from './attributes-direc';

describe('AttributesDirec', () => {
  let component: AttributesDirec;
  let fixture: ComponentFixture<AttributesDirec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributesDirec]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributesDirec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
