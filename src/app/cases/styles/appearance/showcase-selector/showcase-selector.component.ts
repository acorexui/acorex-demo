import { AXButtonComponent } from '@acorex/components/button';
import {
  AXNotificationModule,
  AXNotificationOptions,
  AXNotificationService,
} from '@acorex/components/notification';
import { Component, inject } from '@angular/core';

type AppearanceKind = 'flat' | 'depth' | 'translucent';

type AppearanceZone = {
  kind: AppearanceKind;
  label: string;
  className: string;
  description: string;
};

@Component({
  templateUrl: './showcase-selector.component.html',
  imports: [AXButtonComponent, AXNotificationModule],
  styles: `
    
  `,
})
export class ShowcaseSelectorComponent {
  private readonly notificationService = inject(AXNotificationService);

  protected readonly appearances: AppearanceZone[] = [
    {
      kind: 'flat',
      label: 'Flat',
      className: 'ax-appearance-flat',
      description: 'Functional elevation on floating surfaces only.',
    },
    {
      kind: 'depth',
      label: 'Depth',
      className: 'ax-appearance-depth',
      description: 'Dimensional shadows and inner borders.',
    },
    {
      kind: 'translucent',
      label: 'Translucent',
      className: 'ax-appearance-translucent',
      description: 'Backdrop blur on floating surfaces.',
    },
  ];

  protected openNotification(origin: HTMLElement, zone: AppearanceZone): void {
    const options: AXNotificationOptions & {
      contextElement?: HTMLElement;
    } = {
      title: `${zone.label} notification`,
      content: zone.description,
      color: 'primary',
      location: 'top-end',
      closeButton: true,
      timeOut: 6000,
      contextElement: origin,
    };

    this.notificationService.show(options);
  }
}
