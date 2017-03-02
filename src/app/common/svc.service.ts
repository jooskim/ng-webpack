import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { Store } from '@ngrx/store';
import { ObjectSpec } from '../models';
import { ThreeSpec } from "../models/three";

const db = 'http://localhost:3000/items';
const defaultHeader = {
    headers: new Headers({'Content-Type': 'application/json'})
}

@Injectable()
export class CommonService {

    constructor(
        private http: Http,
        private store: Store<{test: number[], obj: ObjectSpec, three: Array<ThreeSpec>}>
    ) {}

    demoOne() {
        this.store.dispatch({
            type: 'REPLACE',
            payload: [1, 3, 5, 7, 9]
        });

        this.store.dispatch({
            type: 'ADD',
            payload: {
                id: 0,
                name: 'Name',
                age: 30
            }
        });
    }

    demoTwo() {
        setTimeout(() => {
            this.store.dispatch({
                type: 'MERGE',
                payload: [1, 10, 111]
            });

            this.store.dispatch({
                type: 'EDIT',
                payload: {
                    id: 0,
                    age: 31
                }
            });
        }, 2500);
    }

    demoThree() {
        return this.http.get(db)
            .map(res => res.json())
            .map(payload => {
                return {
                    type: 'ADD_ALL',
                    payload
                }
            })
            .subscribe(payload => {
                this.store.dispatch(payload);
            });
    }

    demoFour() {
        this.store.dispatch({
            type: 'APPEND_ONE',
            payload: <ThreeSpec>{
                id: 2,
                name: 'Anonymous',
                description: 'Description for Anonymous'
            }
        });
    }
}
