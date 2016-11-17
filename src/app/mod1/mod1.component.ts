import {
  Component,
  OnInit
 } from '@angular/core';

import { ModuleOneService } from './mod1.service';

@Component({
  selector: 'my-mod1',
  template: `
  <h1>Inline template inside Module1</h1>
  `
})

export class ModuleOneComponent implements OnInit {
  constructor(private service: ModuleOneService) {}

  ngOnInit() {
    console.log('Module one initialized');
    this.service.testMe().subscribe(
      rsp => {
        console.log(rsp);
      },
      err => {
        console.error(err);
      }
    );
  }
}
