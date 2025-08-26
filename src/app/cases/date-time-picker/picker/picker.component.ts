import { AXDateTimePickerType } from '@acorex/components/calendar';
import { AXDateTimePickerComponent } from '@acorex/components/datetime-picker';
import { AXLabelComponent } from '@acorex/components/label';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  imports: [
    FormsModule,
    AXLabelComponent,
    AXSelectBoxComponent,
    AXDateTimePickerComponent,
  ],
})
export class PickerComponent {
  selectedValue = signal<Date | null>(new Date());
  currentPickerMode = signal<AXDateTimePickerType>('datetime');

  pickerModes: AXDateTimePickerType[] = ['date', 'time', 'datetime'];

  formatSelectedValue(): string {
    const value = this.selectedValue();
    if (!value) return 'No value selected';

    switch (this.currentPickerMode()) {
      case 'date':
        return value.toLocaleDateString();
      case 'time':
        return value.toLocaleTimeString();
      case 'datetime':
        return value.toLocaleString();
      default:
        return value.toLocaleString();
    }
  }

  clearSelection() {
    this.selectedValue.set(null);
  }
}
