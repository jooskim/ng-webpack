import {
    Component,
    OnInit,
    AfterContentInit
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';

import { TestOneService } from './testone.service';
import { CommonService } from '../common/svc.service';
import {ThreeSpec} from "../models/three";
import {ObjectSpec} from "../models/object";
import {TestSpec} from "../models/test";

@Component({
    selector: 'my-testone',
    template: `
    test one component<br/>
    observable data<br/>
    {{ d | async }}
    <h3>Redux example</h3>
    <div *ngFor="let num of numberItems | async">
    {{ num }}
    </div>
    <h3>Redux example 2</h3>
    {{ (obj | async).name }}
    {{ (obj | async).age }}
    <hr>
    <ul>
        <li *ngFor="let item of three | async">
            {{ item.id }} / {{ item.name }} / {{ item.description }}
        </li>
    </ul>
    `
})

export class TestOneComponent implements OnInit, AfterContentInit {
    private svc: TestOneService;
    private d: Observable<string>;
    private numberItems: Observable<TestSpec>;
    private obj: Observable<ObjectSpec>;
    private three: Observable<Array<ThreeSpec>>;

    constructor(
        svc: TestOneService,
        private commonSvc: CommonService,
        private store: Store<{test: number[], obj: ObjectSpec, three: ThreeSpec}>
    ) {
        this.svc = svc;
        this.numberItems = this.store.select('test');
        this.obj = this.store.select('object');
        this.three = this.store.select('three');
    }

    ngOnInit() {
        console.log('service is here', this.svc, this.commonSvc);
    }

    ngAfterContentInit() {
        this.d = this.svc.tick();
        this.commonSvc.demoOne();
        this.commonSvc.demoTwo();
        this.commonSvc.demoThree();
        setTimeout(() => {
            this.commonSvc.demoFour();
        }, 2555);

    }
}
