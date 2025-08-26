import { AXDateTimePickerComponent } from '@acorex/components/datetime-picker';
import { AXLabelComponent } from '@acorex/components/label';
import { AXSwitchComponent } from '@acorex/components/switch';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  imports: [
    FormsModule,
    AXLabelComponent,
    AXSwitchComponent,
    AXDateTimePickerComponent,
  ],
})
export class StatesComponent {
  isDisabled = signal<boolean>(false);
  isReadonly = signal<boolean>(false);
  selectedValue = signal<Date | null>(new Date());

  toggleDisabled() {
    this.isDisabled.set(!this.isDisabled());
  }

  toggleReadonly() {
    this.isReadonly.set(!this.isReadonly());
  }

  clearSelection() {
    this.selectedValue.set(null);
  }
}
