import type { AXStyleLookType } from '@acorex/cdk/common';
import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXDropdownButtonModule } from '@acorex/components/dropdown-button';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'demo-dropdown-button-looks',
  standalone: true,
  imports: [AXButtonModule, AXDecoratorModule, AXDropdownButtonModule],
  templateUrl: './look.component.html',
})
export class DropdownButtonLooksComponent {
  readonly looks = signal<readonly AXStyleLookType[]>([
    'solid',
    'blank',
    'outline',
    'twotone',
    'flat',
    'fill',
    'link',
    'none',
  ]);
}
