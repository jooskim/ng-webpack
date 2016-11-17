/* tslint:disable:no-unused-variable */

import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestOneComponent } from './testone/testone.component';
import { TestOneService } from './testone/testone.service';

describe('App: First app', () => {
    let fixture: ComponentFixture<AppComponent>;
    let appInstance: AppComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
              AppComponent,
              TestOneComponent
            ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/'}
            ],
            imports: [
              FormsModule,
              AppRoutingModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        appInstance = fixture.componentInstance;
    });

    it('should pass', () => {
        expect(TestOneComponent).toBeTruthy();
        expect(TestOneService).toBeTruthy();
    });

    it('should create the app', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });
});
