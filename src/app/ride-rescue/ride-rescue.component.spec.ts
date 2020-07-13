import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideRescueComponent } from './ride-rescue.component';

describe('RideRescueComponent', () => {
  let component: RideRescueComponent;
  let fixture: ComponentFixture<RideRescueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideRescueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideRescueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
