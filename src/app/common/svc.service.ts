import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ObjectSpec } from '../models';

@Injectable()
export class CommonService {
    private numberItems: Observable<Array<number>>;
    private obj: Observable<ObjectSpec>;

    constructor(
        private store: Store<number[]>
    ) {
        this.numberItems = this.store.select('test');
        this.obj = this.store.select('object');
    }

    demoOne() {
        // this.numberItems.subscribe((v) => {
        //     console.log('hi', v);
        // });

        this.store.dispatch({
            type: 'REPLACE',
            payload: [1, 3, 5, 7, 9]
        });

        this.store.dispatch({
            type: 'ADD',
            payload: {
                id: 0,
                name: 'Josh Kim',
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
}
