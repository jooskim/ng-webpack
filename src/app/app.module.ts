import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestOneComponent } from './testone/testone.component';
import { TestOneService } from './testone/testone.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule
    ],
    providers: [
        TestOneService
    ],
    declarations: [
      AppComponent,
      TestOneComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}
