import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { AX_DATETIME_HOLIDAYS_LOADER } from '@acorex/core/date-time';
import { AXFormatModule } from '@acorex/core/format';
import {
  AX_TRANSLATION_LOADER,
  AX_TRANSLATION_CONFIG,
  translationConfig,
} from '@acorex/core/translation';
import { AXValidationModule } from '@acorex/core/validation';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { MyCustomHolidaysLoader, MyTranslationLoader } from './app.loaders';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AXMediaViewerModule } from '@acorex/components/media-viewer';
import { AXLocaleModule } from '@acorex/core/locale';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withFetch()),
    // Auto-switches to noop animations under ngServerMode (SSR/prerender).
    provideAnimationsAsync(),
    importProvidersFrom(
      AXLocaleModule,
      AXValidationModule.forRoot(),
      AXFormatModule.forRoot(),
      AXMediaViewerModule.forRoot()
    ),
    {
      provide: AX_DATETIME_HOLIDAYS_LOADER,
      useClass: MyCustomHolidaysLoader,
    },
    {
      provide: AX_TRANSLATION_LOADER,
      useClass: MyTranslationLoader,
    },
    {
      provide: AX_TRANSLATION_CONFIG,
      useValue: translationConfig({
        preload: {
          langs: ['en-US'],
          scopes: ['acorex'],
        },
        defaults: {
          lang: 'en-US',
          scope: 'acorex',
        },
      }),
    },
  ],
};
