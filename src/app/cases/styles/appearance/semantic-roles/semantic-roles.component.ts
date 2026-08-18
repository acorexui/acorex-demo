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
import {
  AXTooltipDirective,
} from '@acorex/components/tooltip';
import { Component, inject } from '@angular/core';

type VisualRole =
  | 'overlay'
  | 'floating'
  | 'prominent-floating'
  | 'modal';

type EffectClass =
  | 'ax-effect-overlay'
  | 'ax-effect-floating'
  | 'ax-effect-prominent-floating'
  | 'ax-effect-modal';

type SemanticRoleCard = {
  label: string;
  role: VisualRole;
  effectClass: EffectClass;
  token: string;
};

type DialogOpenConfig = Parameters<AXDialogService['open']>[0] & {
  contextElement?: HTMLElement;
};

@Component({
  templateUrl: './semantic-roles.component.html',
  imports: [
    AXButtonComponent,
    AXButtonItemListComponent,
    AXButtonItemComponent,
    AXDecoratorIconComponent,
    AXDecoratorGenericComponent,
    AXToastComponent,
    AXNotificationComponent,
    AXTooltipDirective,
  ],
})
export class SemanticRolesComponent {
  private readonly dialogService = inject(AXDialogService);

  protected readonly roleCards: SemanticRoleCard[] = [
    {
      label: 'Dropdown / Menu',
      role: 'overlay',
      effectClass: 'ax-effect-overlay',
      token: '--ax-sys-effect-overlay',
    },
    {
      label: 'Toast',
      role: 'floating',
      effectClass: 'ax-effect-floating',
      token: '--ax-sys-effect-floating',
    },
    {
      label: 'Notification',
      role: 'prominent-floating',
      effectClass: 'ax-effect-prominent-floating',
      token: '--ax-sys-effect-prominent-floating',
    },
    {
      label: 'Tooltip',
      role: 'floating',
      effectClass: 'ax-effect-floating',
      token: '--ax-sys-effect-floating',
    },
    {
      label: 'Dialog panel',
      role: 'modal',
      effectClass: 'ax-effect-modal',
      token: '--ax-sys-effect-modal',
    },
  ];

  protected readonly toastPreview = {
    title: 'Toast',
    content: 'Changes saved.',
    color: 'primary' as const,
    closeButton: true,
    look: 'solid' as const,
    location: 'bottom-center' as const,
    timeOutProgress: false,
  };

  protected readonly notificationPreview = {
    title: 'Notification',
    content: 'Your report is ready to download.',
    color: 'primary' as const,
    closeButton: true,
    location: 'top-end' as const,
    icon: 'none' as const,
    timeOutProgress: false,
  };

  protected openDialog(origin: HTMLElement): void {
    const dialogRef = this.dialogService.open({
      title: 'Dialog panel',
      content: 'Modal elevation uses --ax-sys-effect-modal from this zone.',
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
    } as DialogOpenConfig);
  }
}
