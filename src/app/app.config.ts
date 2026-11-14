import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { appRoutes } from './app.routes';
import { AX_DATETIME_HOLIDAYS_LOADER } from '@acorex/core/date-time';
import { AXFormatModule } from '@acorex/core/format';
import {
  AX_TRANSLATION_LOADER,
  AX_TRANSLATION_CONFIG,
  AXTranslationModule,
  translationConfig,
} from '@acorex/core/translation';
import { AXValidationModule } from '@acorex/core/validation';
import { provideOverlayScrollbar } from '@acorex/cdk/overlay-scrollbar';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { MyCustomHolidaysLoader, MyTranslationLoader } from './app.loaders';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideFileViewer } from '@acorex/components/file-viewer';
import { AXMediaViewerModule } from '@acorex/components/media-viewer';
import { AXLocaleModule } from '@acorex/core/locale';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withFetch()),
    // Auto-switches to noop animations under ngServerMode (SSR/prerender).
    provideAnimationsAsync(),
    provideOverlayScrollbar({
      enabled: true,
      hideDelay: 1200,
      navigationButtons: false,
      navScrollStep: 48,
      designTokens: {
        size: '4px',
        thumbRadius: '4px',
        trackRadius: '4px',
        trackColor: 'transparent',
        thumbColor:
          'color-mix(in srgb, rgb(var(--ax-sys-color-on-lightest-surface)) 40%, rgb(var(--ax-sys-color-lightest-surface)))',
        thumbHoverColor:
          'color-mix(in srgb, rgb(var(--ax-sys-color-on-lightest-surface)) 62%, rgb(var(--ax-sys-color-lightest-surface)))',
        thumbActiveColor:
          'color-mix(in srgb, rgb(var(--ax-sys-color-on-lightest-surface)) 62%, rgb(var(--ax-sys-color-lightest-surface)))',
        trackActiveColor: 'transparent',
        thumbBorderWidth: '0',
        thumbBorderColor: 'transparent',
        trackBorderWidth: '0',
        trackBorderColor: 'transparent',
        fadeDuration: '0.35s',
      },
    }),
    ...provideFileViewer(),
    importProvidersFrom(
      AXLocaleModule,
      AXTranslationModule,
      AXValidationModule.forRoot(),
      AXFormatModule.forRoot(),
      AXMediaViewerModule.forRoot(),
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
