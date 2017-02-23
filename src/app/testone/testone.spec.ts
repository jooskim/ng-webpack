/* tslint:disable:no-unused-variable */

import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

import { TestOneService } from './testone.service';
import { TestOneComponent } from './testone.component';
import { CommonService } from '../common/svc.service';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { TestReducer, ObjectReducer, ThreeReducer } from '../models';

describe('Test One Component', () => {
    let fixture: ComponentFixture<TestOneComponent>;
    let appInstance: TestOneComponent;
    let svc: TestOneService;

    class TestOneServiceStub {
        constructor() {
            console.log('service stub init');
        }
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                TestOneService,
                CommonService
            ],
            declarations: [
                TestOneComponent
            ],
            imports: [
                FormsModule,
                HttpModule,
                StoreModule.provideStore({
                    test: TestReducer,
                    object: ObjectReducer,
                    three: ThreeReducer
                })
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent<TestOneComponent>(TestOneComponent);
        appInstance = fixture.componentInstance;
        svc = fixture.debugElement.injector.get(TestOneService);
    });

    it('should create the app', () => {
        expect(fixture.componentInstance).toBeTruthy();
        expect(svc).toBeTruthy();
    });
});
