import { Component } from '@angular/core';
import { TestOneService } from './testone.service';

@Component({
    selector: 'my-testone',
    template: `
    test one component
    `
})
export class TestOneComponent {
    constructor(private svc: TestOneService) {
        console.log('hi');
    }
}