import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeloEventsRoutingModule } from './velo-events-routing.module';
import { VeloEventsComponent } from './velo-events.component';
import { EventsCalendarComponent } from './components/events-calendar/events-calendar.component';
import { DisplayEventComponent } from './components/display-event/display-event.component';


@NgModule({
  declarations: [VeloEventsComponent,EventsCalendarComponent,    EventsCalendarComponent, DisplayEventComponent],
  imports: [
    CommonModule,
    VeloEventsRoutingModule,
  ]
})
export class VeloEventsModule { }
