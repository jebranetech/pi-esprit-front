import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeloEventsComponent } from './velo-events.component';
import { EventsCalendarComponent } from './components/events-calendar/events-calendar.component';
import { DisplayEventComponent } from './components/display-event/display-event.component';

const routes: Routes = [{ path: '', component: VeloEventsComponent },
{ path: 'event-calendar', component: EventsCalendarComponent },
{ path: 'event-calendar/display-event', component: DisplayEventComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeloEventsRoutingModule { }
