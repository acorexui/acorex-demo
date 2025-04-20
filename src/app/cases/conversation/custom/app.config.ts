import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { AXConversationModule } from '@acorex/components/conversation';
import { CustomTestMessageComponent } from './test-custom.component';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      AXConversationModule.forRoot({
        types: [{ component: CustomTestMessageComponent, name: 'custom' }],
      })
    ),
  ],
};
