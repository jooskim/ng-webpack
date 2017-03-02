/* tslint:disable:no-unused-variable */

import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestOneComponent } from './testone/testone.component';
import { TestOneService } from './testone/testone.service';
import { CommonService } from './common/svc.service';

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
                CommonService,
                { provide: APP_BASE_HREF, useValue: '/'}
            ],
            imports: [
              FormsModule,
              AppRoutingModule,
              HttpModule,
              StoreModule
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
