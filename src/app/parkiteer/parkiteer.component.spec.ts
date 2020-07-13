import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkiteerComponent } from './parkiteer.component';

describe('ParkiteerComponent', () => {
  let component: ParkiteerComponent;
  let fixture: ComponentFixture<ParkiteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkiteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkiteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
