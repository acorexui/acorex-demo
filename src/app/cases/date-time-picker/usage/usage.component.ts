import { AXDateTimePickerComponent } from '@acorex/components/datetime-picker';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './usage.component.html',
  imports: [AXDateTimePickerComponent, FormsModule],
})
export class UsageComponent {
  protected date = signal(new Date());
}
