import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirthweldanomalyComponent } from './girthweldanomaly.component';

describe('GirthweldanomalyComponent', () => {
  let component: GirthweldanomalyComponent;
  let fixture: ComponentFixture<GirthweldanomalyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GirthweldanomalyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GirthweldanomalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
