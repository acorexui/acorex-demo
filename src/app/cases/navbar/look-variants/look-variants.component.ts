import { AXButtonComponent } from '@acorex/components/button';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { AXLabelComponent } from '@acorex/components/label';
import { AXNavbarComponent } from '@acorex/components/navbar';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { TitleCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './look-variants.component.html',
  imports: [
    AXNavbarComponent,
    AXDecoratorGenericComponent,
    AXDecoratorIconComponent,
    AXButtonComponent,
    AXSelectBoxComponent,
    AXLabelComponent,
    FormsModule,
    TitleCasePipe,
  ],
})
export class LookVariantsComponent {
  selectedLook = signal<'solid' | 'fill' | 'flat' | 'none'>('solid');

  lookOptions = [
    { text: 'Solid', value: 'solid' },
    { text: 'Fill', value: 'fill' },
    { text: 'Flat', value: 'flat' },
    { text: 'None', value: 'none' },
  ];
}
