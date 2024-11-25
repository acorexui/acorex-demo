import { Component, signal } from '@angular/core';
import { AXPickerModule } from '@acorex/components/picker';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXPickerModule, FormsModule],
})
export class UsageComponent {
  protected hours = signal<any[]>(
    Array(24)
      .fill(0)
      .map((m, i) => ({ id: i, text: i }))
  );
}
