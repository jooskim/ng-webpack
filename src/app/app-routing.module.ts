import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestOneComponent } from './testone/testone.component';

const appRoutes: Routes = [
    {
        path: 'testone',
        component: TestOneComponent
    },{
        path: '',
        redirectTo: 'testone',
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