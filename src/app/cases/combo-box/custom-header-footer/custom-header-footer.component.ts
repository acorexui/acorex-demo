import { Component, signal } from '@angular/core';
import { AXComboBoxComponent, AXComboBoxItem } from '@acorex/components/combo-box';
import {
  AXDecoratorClearButtonComponent,
  AXDecoratorGenericComponent,
} from '@acorex/components/decorators';

@Component({
  templateUrl: 'custom-header-footer.component.html',
  imports: [
    AXComboBoxComponent,
    AXDecoratorClearButtonComponent,
    AXDecoratorGenericComponent,
  ],
})
export class CustomHeaderFooterComponent {
  value = signal<string | number>('');

  countries: AXComboBoxItem[] = [
    { id: 'ar', text: 'Argentina', value: 'ar' },
    { id: 'au', text: 'Australia', value: 'au' },
    { id: 'br', text: 'Brazil', value: 'br' },
    { id: 'ca', text: 'Canada', value: 'ca' },
    { id: 'fr', text: 'France', value: 'fr' },
    { id: 'de', text: 'Germany', value: 'de' },
    { id: 'in', text: 'India', value: 'in' },
    { id: 'ir', text: 'Iran', value: 'ir' },
    { id: 'it', text: 'Italy', value: 'it' },
    { id: 'jp', text: 'Japan', value: 'jp' },
    { id: 'nl', text: 'Netherlands', value: 'nl' },
    { id: 'no', text: 'Norway', value: 'no' },
    { id: 'es', text: 'Spain', value: 'es' },
    { id: 'se', text: 'Sweden', value: 'se' },
    { id: 'tr', text: 'Turkey', value: 'tr' },
    { id: 'gb', text: 'United Kingdom', value: 'gb' },
    { id: 'us', text: 'United States', value: 'us' },
  ];
}
