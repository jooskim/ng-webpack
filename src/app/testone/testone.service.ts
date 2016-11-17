import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TestOneService {
    private data$: BehaviorSubject<string>;

    constructor() {
        this.data$ = new BehaviorSubject<string>(null);
    }

    getCurrentValue(): string {
        return this.data$.getValue();
    }

    tick(): Observable<string> {
        this.data$.next('abcde');
        return this.data$.asObservable();
    }

    returnTrue(): boolean {
        return true;
    }
}
