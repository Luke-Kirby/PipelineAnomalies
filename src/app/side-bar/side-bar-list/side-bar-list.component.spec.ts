import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarListComponent } from './side-bar-list.component';

describe('SideBarListComponent', () => {
  let component: SideBarListComponent;
  let fixture: ComponentFixture<SideBarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
