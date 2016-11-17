/* tslint:disable:no-unused-variable */
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ModuleOneComponent } from './mod1.component';
import { ModuleOneService } from './mod1.service';

describe('Module One Unit Test', () => {
  let fixture: ComponentFixture<ModuleOneComponent>;
  let compInstance: ModuleOneComponent;
  let service: ModuleOneService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule
      ],
      declarations: [
        ModuleOneComponent
      ],
      providers: [
        ModuleOneService
      ]
    }).
    compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent<ModuleOneComponent>(ModuleOneComponent);
    compInstance = fixture.componentInstance;
    service = fixture.debugElement.injector.get(ModuleOneService);
  });

  it('should create the component', () => {
    expect(compInstance).toBeTruthy();
  });

  it('should have a service instance', () => {
    expect(service).toBeTruthy();
  });
});
