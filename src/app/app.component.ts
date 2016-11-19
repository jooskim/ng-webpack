import { Component } from '@angular/core';

require('../../node_modules/clarity-ui/clarity-ui.min.css');

@Component({
    selector: 'my-app',
    styleUrls: ['../assets/app.scss'],
    template: `
    <router-outlet></router-outlet>
    `
})

export class AppComponent {

}
