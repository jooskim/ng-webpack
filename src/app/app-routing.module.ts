import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModuleOneComponent } from './mod1/mod1.component';

const appRoutes: Routes = [
  {
    path: 'mod1',
    component: ModuleOneComponent
  },{
    path: '',
    redirectTo: 'mod1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}