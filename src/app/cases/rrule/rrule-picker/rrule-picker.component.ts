import {
  AXROptionsType,
  AXRruleComponent,
  AXRrulePreviewComponent,
} from '@acorex/components/rrule';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'rrule-picker.component.html',
  imports: [AXRruleComponent, AXRrulePreviewComponent],
  styles: `:host{
      display:block;
      width: 100%;
    }`,
})
export class RRulePickerComponent {
  rule = signal<AXROptionsType | string>('RRULE:FREQ=WEEKLY;INTERVAL=1');
  string = signal<string>('');

  onStringChange(string: string) {
    this.string.set(string);
  }
}
