import type { AXStyleSizeType } from '@acorex/cdk/common';
import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXDropdownButtonModule } from '@acorex/components/dropdown-button';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'demo-dropdown-button-sizes',
  standalone: true,
  imports: [AXButtonModule, AXDecoratorModule, AXDropdownButtonModule],
  templateUrl: './size.component.html',
})
export class DropdownButtonSizesComponent {
  readonly sizes = signal<readonly AXStyleSizeType[]>([
    'ax-md',
    'ax-xs',
    'ax-sm',
    'ax-lg',
    'ax-xl',
  ]);
}
