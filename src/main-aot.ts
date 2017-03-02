/**
 * Created by jooskim on 8/4/16.
 */
import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { environment } from './app/environment';
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';

if(environment.production) {
    enableProdMode();
}

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);

