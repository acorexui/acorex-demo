import { AXValueChangedEvent } from '@acorex/cdk/common';
import { AXDateTimePickerType } from '@acorex/components/calendar';
import { AXDateTimePickerComponent } from '@acorex/components/datetime-picker';
import { AXLabelComponent } from '@acorex/components/label';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type PickerModeOption = { id: AXDateTimePickerType; text: string };

function toPickerMode(value: string): AXDateTimePickerType {
  switch (value) {
    case 'date':
    case 'time':
    case 'datetime':
      return value;
    default:
      return 'datetime';
  }
}

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

  pickerModes: PickerModeOption[] = [
    { id: 'date', text: 'Date' },
    { id: 'time', text: 'Time' },
    { id: 'datetime', text: 'Date & Time' },
  ];

  onPickerModeChange(event: AXValueChangedEvent<unknown>) {
    const value = event.value;
    let mode: AXDateTimePickerType = 'datetime';

    if (typeof value === 'string') {
      mode = toPickerMode(value);
    } else if (Array.isArray(value) && value.length) {
      const item = value[0];
      mode = toPickerMode(
        typeof item === 'string'
          ? item
          : ((item as PickerModeOption)?.id ?? 'datetime')
      );
    } else if (value && typeof value === 'object' && 'id' in value) {
      mode = (value as PickerModeOption).id;
    }

    this.currentPickerMode.set(mode);
  }

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
