import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    //Importacion de rutas y view transitions
   provideRouter(routes,withViewTransitions()),
   //Importacion de modulos
   importProvidersFrom( HttpClientModule)
  ]
};
