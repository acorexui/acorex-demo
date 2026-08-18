import { AXButtonComponent } from '@acorex/components/button';
import { AXTextBoxComponent } from '@acorex/components/text-box';
import { Component } from '@angular/core';

type ActivationPanel = {
  label: string;
  className: string;
  translucentBackdrop?: boolean;
};

@Component({
  templateUrl: './activation-classes.component.html',
  imports: [AXButtonComponent],
  styles: `

  `,
})
export class ActivationClassesComponent {
  protected readonly panels: ActivationPanel[] = [
    {
      label: 'ax-appearance-flat',
      className: 'ax-appearance-flat',
    },
    {
      label: 'ax-appearance-depth',
      className: 'ax-appearance-depth',
    },
    {
      label: 'ax-appearance-translucent',
      className: 'ax-appearance-translucent',
      translucentBackdrop: true,
    },
  ];
}
