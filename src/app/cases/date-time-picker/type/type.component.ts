import { AXButtonComponent } from '@acorex/components/button';
import { AXDateTimePickerComponent } from '@acorex/components/datetime-picker';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { AXLabelComponent } from '@acorex/components/label';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  imports: [
    FormsModule,
    AXLabelComponent,
    AXButtonComponent,
    AXSelectBoxComponent,
    AXDateTimePickerComponent,
    AXDecoratorGenericComponent,
  ],
})
export class TypeComponent {
  selectedValue = signal<Date | null>(new Date());
  currentCalendarType = signal<string>('gregorian');

  calendarTypes = [
    { id: 'gregorian', text: 'Gregorian' },
    { id: 'solar-hijri', text: 'Solar Hijri' },
  ];

  formatSelectedValue(): string {
    const value = this.selectedValue();
    if (!value) return 'No value selected';

    return value.toLocaleString();
  }

  clearSelection() {
    this.selectedValue.set(null);
  }
}
