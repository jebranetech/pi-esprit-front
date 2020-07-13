import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { EventEntity } from '../models/Event';
import { map } from 'rxjs/internal/operators/map';
import { EventConfig } from '../models/EventConfig';

export interface Todo {
  id?: any;
  createdAt?: number;
  value: string;
}

@Injectable()
export class TodoService {
  private _todos = new BehaviorSubject<EventEntity[]>([]);
  private baseUrl = 'http://localhost:8000';
  private dataStore: { todos: EventEntity[] } = { todos: [] };
  readonly todos = this._todos.asObservable();

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
        console.log(data);
       });
  }

  get todoso() : Observable<any>{
    return this._todos.asObservable();
  }

  loadAll() {
    this.http.get<EventEntity[]>(`${this.baseUrl}/config/getAllConfig`).subscribe(
      data => {
        this.dataStore.todos = data;
        this._todos.next(Object.assign({}, this.dataStore).todos);
      },
      error => console.log('Could not load todos.')
    );
  }

  public getJSON(): Observable<any> {
    return this.http.get(`${this.baseUrl}/config/getAllConfig`);
  }

  load(id: number | string) {
    this.http.get<EventEntity>(`${this.baseUrl}/todos/${id}`).subscribe(
      data => {
        let notFound = true;

        this.dataStore.todos.forEach((item, index) => {
          if (item.distance === data.distance) {
            this.dataStore.todos[index] = data;
            notFound = false;
          }
        });

        if (notFound) {
          this.dataStore.todos.push(data);
        }

        this._todos.next(Object.assign({}, this.dataStore).todos);
      },
      error => console.log('Could not load todo.')
    );
  }




  create(todo: EventEntity) {
    this.http
      .put<EventEntity>(`${this.baseUrl}/putConf`, JSON.stringify(todo)).subscribe(
        data => {
          this.dataStore.todos.push(data);
          this._todos.next(Object.assign({}, this.dataStore).todos);
        },
        error => console.log('Could not create todo.')
      );
  }

  createEventConfig(todo: EventConfig) {
    this.http
      .post<EventEntity>(`${this.baseUrl}/config/putConf`, JSON.stringify(todo)).subscribe(
        data => {
          this.dataStore.todos.push(data);
          this._todos.next(Object.assign({}, this.dataStore).todos);
        },
        error => console.log('Could not create todo.')
      );
  }

}

  
