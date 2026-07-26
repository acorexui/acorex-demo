import { AXStyleLookType } from '@acorex/cdk/common';
import { AXButtonComponent } from '@acorex/components/button';
import { AXDateTimeTextBoxComponent } from '@acorex/components/datetime-text-box';
import { AXDecoratorClearButtonComponent } from '@acorex/components/decorators';
import { AXFormFieldComponent } from '@acorex/components/form';
import { AXLabelComponent } from '@acorex/components/label';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'looks.component.html',
  imports: [
    AXLabelComponent,
    AXFormFieldComponent,
    AXDateTimeTextBoxComponent,
    AXDecoratorClearButtonComponent,
    AXButtonComponent,
  ],
})
export class LooksComponent {
  protected currentLook = signal<AXStyleLookType>('solid');

  protected looks: { value: AXStyleLookType; label: string }[] = [
    { value: 'solid', label: 'Solid' },
    { value: 'outline', label: 'Outline' },
    { value: 'flat', label: 'Flat' },
    { value: 'fill', label: 'Fill' },
  ];

  protected setLook(look: AXStyleLookType) {
    this.currentLook.set(look);
  }
}
