import { AXButtonComponent } from '@acorex/components/button';
import { AXToastModule, AXToastService } from '@acorex/components/toast';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './translation.component.html',
  imports: [AXButtonComponent, AXToastModule],
})
export class TranslationComponent {
  private toastService = inject(AXToastService);

  showWithCustomTranslation() {
    this.toastService.show({
      color: 'success',
      title: '@acorex:common.notifications.info',
      content: 'This is a custom message with translation support.',
      closeButton: true,
      timeOut: 5000,
      timeOutProgress: true,
    });
  }
}
