import {
  AXButtonGroupComponent,
  AXButtonGroupItemComponent,
} from '@acorex/components/button-group';
import { AXOtpComponent } from '@acorex/components/otp';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'looks.component.html',
  imports: [AXOtpComponent, AXButtonGroupComponent, AXButtonGroupItemComponent],
  standalone: true,
})
export class LooksComponent {
  selectedLook = signal<'solid' | 'outline' | 'flat' | 'fill'>('solid');

  looks = [
    { value: 'solid', label: 'Solid' },
    { value: 'outline', label: 'Outline' },
    { value: 'flat', label: 'Flat' },
    { value: 'fill', label: 'Fill' },
  ] as const;

  setLook(look: 'solid' | 'outline' | 'flat' | 'fill') {
    this.selectedLook.set(look);
  }
}
