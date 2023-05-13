import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ToastModule } from './core/toasts/toast.module';

// ====================================
// SERVICES
// ====================================

import { ExampleCoreService } from './core/services/example-service/example-core.service';
import { GlobalErrorHandlerService } from './core/services/global-error-handler/global-error-handler.service';
import { CustomTranslationsLoaderService } from './core/services/custom-translations-loader-service/custom-translations-loader.service';

// ====================================
// INTERCEPTORS
// ====================================

import { ApiInterceptor } from './core/interceptors/api/api.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ToastModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslationsLoaderService,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    ExampleCoreService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
