import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrackComponent } from './crack.component';

describe('CrackComponent', () => {
  let component: CrackComponent;
  let fixture: ComponentFixture<CrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
