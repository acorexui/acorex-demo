import { AXButtonComponent } from '@acorex/components/button';
import { AXTextBoxComponent } from '@acorex/components/text-box';
import { Component } from '@angular/core';

type AppearanceColumn = {
  label: string;
  className: string;
 translucentBackdrop?: boolean;
};

@Component({
  templateUrl: './visual-charecter.component.html',
  imports: [AXButtonComponent, AXTextBoxComponent],
})
export class VisualCharecterComponent {
  protected readonly columns: AppearanceColumn[] = [
    {
      label: 'Flat',
      className: 'ax-appearance-flat'
    
    },
    {
      label: 'Depth',
      className: 'ax-appearance-depth',

    },
    {
      label: 'Translucent',
      className: 'ax-appearance-translucent',
      translucentBackdrop: true,
    },
  ];
}
