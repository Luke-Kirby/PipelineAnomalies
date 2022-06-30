import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaminationComponent } from './lamination.component';

describe('LaminationComponent', () => {
  let component: LaminationComponent;
  let fixture: ComponentFixture<LaminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaminationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
