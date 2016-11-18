import {
    Component,
    OnInit,
    AfterContentInit
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Rx';

import { TestOneService } from './testone.service';

@Component({
    selector: 'my-testone',
    template: `
    test one component<br/>
    observable data<br/>
    {{ d | async }}
    `
})

export class TestOneComponent implements OnInit, AfterContentInit {
    private svc: TestOneService;
    private d: Observable<string>;

    constructor(svc: TestOneService) {
        this.svc = svc;
    }

    ngOnInit() {
        console.log('service is here', this.svc);
    }

    ngAfterContentInit() {
        this.d = this.svc.tick();
    }
}
