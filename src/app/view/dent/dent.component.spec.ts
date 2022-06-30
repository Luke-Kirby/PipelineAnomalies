import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentComponent } from './dent.component';

describe('DentComponent', () => {
  let component: DentComponent;
  let fixture: ComponentFixture<DentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
