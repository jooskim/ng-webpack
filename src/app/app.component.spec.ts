/* tslint:disable:no-unused-variable */

import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component.ts';
import { ModuleOneComponent } from './mod1/mod1.component.ts';

describe('App: First app', () => {
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
              AppComponent,
              ModuleOneComponent
            ],
            imports: [
              FormsModule,
              AppRoutingModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        /* do necessary data binding. something like:
           let appComp = fixture.componentInstance;
           let appComp.debugElement.query(By.css('.hero'));
           appComp.someAttribute = someInstance;
        */
        fixture.detectChanges();

    });

    it('should create the app', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });
});
