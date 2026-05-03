import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXDropdownButtonModule } from '@acorex/components/dropdown-button';
import { Component, signal } from '@angular/core';

export type DropdownButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'default';

@Component({
  selector: 'demo-dropdown-button-colors',
  standalone: true,
  imports: [AXButtonModule, AXDecoratorModule, AXDropdownButtonModule],
  templateUrl: './color.component.html',
})
export class DropdownButtonColorsComponent {
  readonly colors = signal<readonly DropdownButtonColor[]>([
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'default',
  ]);
}
