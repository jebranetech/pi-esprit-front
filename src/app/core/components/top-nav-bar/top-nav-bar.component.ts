import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/TestService';
import { EventEntity } from '../../models/Event';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EventConfig } from '../../models/EventConfig';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {

  events:EventEntity[];
  singleTodo$: Observable<any[]>;
  todos: any;
  movies: EventEntity[];
  errorMessage: string;
  event:EventEntity;
  eventConfig:EventConfig;
  constructor(private todoService:TodoService) { 
   
  }
// In our todo component
ngOnInit() {
  this.todoService.loadAll();
  this.singleTodo$ = this.todoService.todos;

  this.event = new EventEntity({
    eventName: 'Foo',
    distance: 745698,
    location: 'BAR',
    startDate: 5474884,
    endDate: 652256,
    isTheme: true,
});


this.eventConfig = new EventConfig({
  rep: 1,
  dateRep: 25456,
  status: "hello from the planet angular",
  commentPermession: true,
  showInviteList: true,
  isArchived: true,
  showDate: 61654,
  event: 21
});
  this.todoService.create(this.event);
  this.todoService.createEventConfig(this.eventConfig);
}

}
