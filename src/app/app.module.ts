/**
 * Created by jooskim on 9/16/16.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleOneComponent } from './mod1/mod1.component';
import { ModuleOneService } from './mod1/mod1.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule
    ],
    providers: [
      ModuleOneService
    ],
    declarations: [
      AppComponent,
      ModuleOneComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}
