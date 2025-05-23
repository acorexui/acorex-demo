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
import { AXConversationModule } from '@acorex/components/conversation';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AXMediaViewerModule } from '@acorex/components/media-viewer';
import { CustomTestMessageComponent } from './cases/conversation/custom/test-custom.component';
import { AXLocaleModule } from '@acorex/core/locale';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withFetch()),
    provideAnimations(),
    importProvidersFrom(
      AXLocaleModule,
      AXValidationModule.forRoot(),
      AXConversationModule.forRoot({
        types: [{ component: CustomTestMessageComponent, name: 'custom' }],
      }),
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
          scopes: ['common'],
        },
        defaults: {
          lang: 'en-US',
          scope: 'common',
        },
      }),
    },
  ],
};
