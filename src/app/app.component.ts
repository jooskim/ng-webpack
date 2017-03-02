import { Component } from '@angular/core';
const map = require('lodash/fp/map');
const flow = require('lodash/fp/flow');
const sortBy = require('lodash/fp/sortBy');
const reduce = require('lodash/fp/reduce');
const flatten = require('lodash/fp/flatten');

@Component({
    selector: 'my-app',
    styleUrls: ['../assets/app.scss'],
    template: `
    <router-outlet></router-outlet>
    `
})

export class AppComponent {
    constructor() {
        const yo = flow(
            map(x => [x, x * 2]),
            flatten,
            reduce((prev, curr) => { return prev + curr; }, 0)
        );
        console.log(
            yo([1, 2, 3, 4, 5])
        );
    }
}
