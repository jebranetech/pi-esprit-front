import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeloEventsComponent } from './velo-events.component';

describe('VeloEventsComponent', () => {
  let component: VeloEventsComponent;
  let fixture: ComponentFixture<VeloEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeloEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeloEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
