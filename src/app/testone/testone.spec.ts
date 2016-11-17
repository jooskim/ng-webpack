/* tslint:disable:no-unused-variable */

import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TestOneComponent } from './testone.component';
import { TestOneService } from './testone.service';

describe('Test One Component', () => {
    let fixture: ComponentFixture<TestOneComponent>;
    let appInstance: TestOneComponent;

    class TestOneServiceStub {
        constructor() {
            console.log('service stub init');
        }
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
              FormsModule
            ],
            providers: [
                { provide: TestOneService, useClass: TestOneServiceStub }
            ],
            declarations: [
              TestOneComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestOneComponent);
        fixture.detectChanges();
        appInstance = fixture.componentInstance;
    });

    it('should create the app', () => {
        expect(fixture.componentInstance).toBeTruthy();
        let svc = fixture.debugElement.injector.get(TestOneService);
        expect(svc).toBeTruthy();
    });
});
