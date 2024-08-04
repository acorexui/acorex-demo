import { AXPasswordBoxModule } from '@acorex/components/password-box';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './read-only-disable.component.html',
  standalone: true,
  imports: [AXPasswordBoxModule],
})
export class ReadOnlyDisableComponent {
  protected options = signal({
    disabled: true,
    readonly: true,
  });
}
