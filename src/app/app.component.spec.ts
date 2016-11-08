/* tslint:disable:no-unused-variable */

import { async, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component.ts';

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe('App: First app', () => {
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [FormsModule]
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
