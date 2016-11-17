/* tslint:disable:no-unused-variable */

import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

import { TestOneService } from './testone.service';
import { TestOneComponent } from './testone.component';

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
                TestOneService
            ],
            declarations: [
                TestOneComponent
            ],
            imports: [
                FormsModule
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
