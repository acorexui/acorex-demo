import { AXButtonComponent } from '@acorex/components/button';
import { AXDialogService } from '@acorex/components/dialog';
import { Component, inject } from '@angular/core';

type OverlayZone = {
  id: string;
  label: string;
  themeClass: string;
  appearanceClass: string;
  description: string;
  translucentBackdrop?: boolean;
};

@Component({
  templateUrl: './overlay-context.component.html',
  imports: [AXButtonComponent],
})
export class OverlayContextComponent {
  private readonly dialogService = inject(AXDialogService);

  protected readonly zones: OverlayZone[] = [
    {
      id: 'depth-dark',
      label: 'ax-dark + ax-appearance-depth',
      themeClass: 'ax-dark',
      appearanceClass: 'ax-appearance-depth',
      description: 'Dialog inherits dark theme and depth appearance.',
    },
    {
      id: 'translucent-light',
      label: 'ax-light + ax-appearance-translucent',
      themeClass: 'ax-light',
      appearanceClass: 'ax-appearance-translucent',
      description: 'Dialog inherits light theme and translucent appearance.',
      translucentBackdrop: true,
    },
  ];

  protected readonly nestedZone = {
    outerLabel: 'ax-dark + ax-appearance-depth',
    innerLabel: 'ax-light (nested origin)',
    description:
      'contextElement is the inner ax-light box. Theme comes from the nearest ax-light; appearance from the ax-dark depth ancestor.',
  };

  protected openDialog(origin: HTMLElement, description: string): void {
    const dialogRef = this.dialogService.open({
      title: 'Dialog',
      content: description,
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
