/* tslint:disable:no-unused-variable */

import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestOneComponent } from './testone/testone.component';

describe('App: First app', () => {
    let fixture: ComponentFixture<AppComponent>;
    let appInstance: AppComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
              FormsModule,
              AppRoutingModule
            ],
            declarations: [
              AppComponent,
              TestOneComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        appInstance = fixture.componentInstance;
    });

    it('should create the app', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });
});
