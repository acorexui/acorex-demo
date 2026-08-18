import {
  AXButtonComponent,
} from '@acorex/components/button';
import { AXDialogService } from '@acorex/components/dialog';
import { AXLabelComponent } from '@acorex/components/label';
import { AXNotificationComponent } from '@acorex/components/notification';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { AXTextBoxComponent } from '@acorex/components/text-box';
import { AXTooltipDirective } from '@acorex/components/tooltip';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type AXContrast = 'standard' | 'enhanced' | 'high';

type SurfaceDemo = {
  label: string;
  role: string;
  kind: 'toast' | 'notification' | 'menu' | 'tooltip' | 'dialog';
};

type DialogOpenConfig = Parameters<AXDialogService['open']>[0] & {
  contextElement?: HTMLElement;
};

@Component({
  templateUrl: './contrast.component.html',
  imports: [
    AXLabelComponent,
    AXSelectBoxComponent,
    AXButtonComponent,
    AXTextBoxComponent,
    AXNotificationComponent,
    AXTooltipDirective,
    FormsModule,
  ],
})
export class contrastComponent {
 

  protected readonly contrastOptions: { id: AXContrast; label: string }[] = [
    { id: 'standard', label: 'Standard' },
    { id: 'enhanced', label: 'Enhanced' },
    { id: 'high', label: 'High' },
  ];

  protected readonly surfaceDemos: SurfaceDemo[] = [
   
    {
      label: 'Notification',
      role: 'prominent-floating',
      kind: 'notification',
    },
   
    { label: 'Tooltip', role: 'floating', kind: 'tooltip' },
   
  ];

  

  protected readonly notificationPreview = {
    title: 'Notification',
    content: 'Prominent floating surface',
    color: 'primary' as const,
    closeButton: true,
    location: 'top-end' as const,
    icon: 'none' as const,
    timeOutProgress: false,
  };

  protected readonly contrast = signal<AXContrast>('standard');

  protected readonly contrastClass = computed(() => {
    switch (this.contrast()) {
      case 'enhanced':
        return 'ax-contrast-enhanced';
      case 'high':
        return 'ax-contrast-high';
      default:
        return '';
    }
  });

  protected setContrast(value: AXContrast): void {
    this.contrast.set(value);
  }


}
