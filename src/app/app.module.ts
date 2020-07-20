import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './core/components/top-nav-bar/top-nav-bar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HttpClientModule }    from '@angular/common/http';
import { TodoService } from './core/services/TestService';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  listPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule,
    Calendar
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
