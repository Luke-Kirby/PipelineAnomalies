import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrosionComponent } from './corrosion.component';

describe('CorrosionComponent', () => {
  let component: CorrosionComponent;
  let fixture: ComponentFixture<CorrosionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrosionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrosionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
