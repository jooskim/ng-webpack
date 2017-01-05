import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { TestReducer, ObjectReducer, ThreeReducer } from './models';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestOneComponent } from './testone/testone.component';
import { TestOneService } from './testone/testone.service';
import { CommonService } from './common/svc.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        StoreModule.provideStore({
            test: TestReducer,
            object: ObjectReducer,
            three: ThreeReducer
        })
    ],
    providers: [
        TestOneService,
        CommonService
    ],
    declarations: [
      AppComponent,
      TestOneComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}
