/**
 * Created by jooskim on 8/4/16.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app/environment';
import { AppModule } from './app/app.module';

if(environment.production) {
    enableProdMode();
}

const pbDynamic = platformBrowserDynamic();
pbDynamic.bootstrapModule(<any>AppModule);
