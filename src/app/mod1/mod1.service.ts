import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ModuleOneService {
  private test$: BehaviorSubject<Object> = new BehaviorSubject<Object>(null);

  constructor(private http: Http) {}

  testMe(): Observable<Object> {
    this.test$.next({
      id: '1',
      name: 'haha'
    });

    return this.test$.asObservable();
  }
}