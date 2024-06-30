import { Component, TemplateRef, inject } from '@angular/core';

import { AXImageModule } from '@acorex/components/image';
import { AXLoadingModule } from '@acorex/components/loading';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXButtonModule } from '@acorex/components/button';
import { AXPopupModule, AXPopupService } from '@acorex/components/popup';

@Component({
  standalone: true,
  templateUrl: 'overlay.component.html',
  imports: [
    AXImageModule,
    AXLoadingModule,
    AXDecoratorModule,
    AXButtonModule,
    AXPopupModule,
  ],
})
export class OverlayComponent {
  private popupService = inject(AXPopupService);

  protected showFullImage(image: TemplateRef<HTMLElement>) {
    this.popupService.open(image, {
      size: 'lg',
      title: '',
      closeButton: false,
      header: false,
      closeOnBackdropClick: true,
    });
  }
}
