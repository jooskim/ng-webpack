import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { TestOneService } from './testone.service';

@Component({
    selector: 'my-testone',
    template: `
    test one component
    `
})

export class TestOneComponent implements OnInit {
    private svc: TestOneService;

    constructor(svc: TestOneService) {
        this.svc = svc;
    }

    ngOnInit() {
        console.log('service is here', this.svc);
    }

}
