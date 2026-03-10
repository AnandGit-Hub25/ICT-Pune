import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirec } from './structural-direc';

describe('StructuralDirec', () => {
  let component: StructuralDirec;
  let fixture: ComponentFixture<StructuralDirec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirec]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
