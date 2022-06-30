import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllegaltapComponent } from './illegaltap.component';

describe('IllegaltapComponent', () => {
  let component: IllegaltapComponent;
  let fixture: ComponentFixture<IllegaltapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllegaltapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IllegaltapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
