import {
  AXButtonItemComponent,
  AXButtonItemListComponent,
  AXButtonComponent,
} from '@acorex/components/button';
import { AXDialogService } from '@acorex/components/dialog';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { AXNotificationComponent } from '@acorex/components/notification';
import { AXToastComponent } from '@acorex/components/toast';
import { Component, inject } from '@angular/core';

type EffectCard = {
  label: string;
  role: 'floating' | 'prominent-floating' | 'overlay' | 'modal';
  token: string;
  kind: 'toast' | 'notification' | 'menu' | 'dialog';
};

@Component({
  templateUrl: './flat-compability.component.html',
  imports: [
    AXButtonComponent,
    AXButtonItemListComponent,
    AXButtonItemComponent,
    AXDecoratorIconComponent,
    AXDecoratorGenericComponent,
    AXToastComponent,
    AXNotificationComponent,
  ],
})
export class FlatCompabilityComponent {
  private readonly dialogService = inject(AXDialogService);

  protected readonly effectCards: EffectCard[] = [
    {
      label: 'Toast',
      role: 'floating',
      token: '--ax-sys-effect-floating',
      kind: 'toast',
    },
    {
      label: 'Notification',
      role: 'prominent-floating',
      token: '--ax-sys-effect-prominent-floating',
      kind: 'notification',
    },
    {
      label: 'Dropdown',
      role: 'overlay',
      token: '--ax-sys-effect-overlay',
      kind: 'menu',
    },
    {
      label: 'Dialog',
      role: 'modal',
      token: '--ax-sys-effect-modal',
      kind: 'dialog',
    },
  ];

  protected readonly toastPreview = {
    title: 'Toast',
    content: 'Floating surface',
    color: 'primary' as const,
    closeButton: true,
    look: 'solid' as const,
    location: 'bottom-center' as const,
    timeOutProgress: false,
  };

  protected readonly notificationPreview = {
    title: 'Notification',
    content: 'Prominent floating surface',
    color: 'primary' as const,
    closeButton: true,
    location: 'top-end' as const,
    icon: 'none' as const,
    timeOutProgress: false,
  };

  protected openDialog(origin: HTMLElement): void {
    const dialogRef = this.dialogService.open({
      title: 'Dialog',
      content: 'Flat keeps functional overlay separation; modal elevation comes from depth.',
      type: 'primary',
      icon: 'none',
      orientation: 'vertical',
      contextElement: origin,
      buttons: [
        {
          text: 'Close',
          color: 'primary',
          autofocus: true,
          onClick: () => dialogRef.close(),
        },
      ],
    });
  }
}
