import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuckleComponent } from './buckle.component';

describe('BuckleComponent', () => {
  let component: BuckleComponent;
  let fixture: ComponentFixture<BuckleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuckleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuckleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
