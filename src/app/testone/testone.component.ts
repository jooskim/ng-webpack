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

@Component({
    selector: 'my-testone',
    template: `
    test one component<br/>
    observable data<br/>
    {{ d | async }}
    <h3>Redux example</h3>
    <div *ngFor="let num of commonSvc.numberItems | async">
    {{ num }}
    </div>
    <h3>Redux example 2</h3>
    {{ (commonSvc.obj | async).name }}
    {{ (commonSvc.obj | async).age }}
    `
})

export class TestOneComponent implements OnInit, AfterContentInit {
    private svc: TestOneService;
    private d: Observable<string>;

    constructor(
        svc: TestOneService,
        private commonSvc: CommonService
    ) {
        this.svc = svc;
    }

    ngOnInit() {
        console.log('service is here', this.svc, this.commonSvc);
    }

    ngAfterContentInit() {
        this.d = this.svc.tick();
        this.commonSvc.demoOne();
        this.commonSvc.demoTwo();
    }
}
