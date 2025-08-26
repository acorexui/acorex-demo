import { AXDateTimePickerComponent } from '@acorex/components/datetime-picker';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { AXLabelComponent } from '@acorex/components/label';
import { AXSwitchComponent } from '@acorex/components/switch';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-constraints',
  templateUrl: './constraints.component.html',
  imports: [
    FormsModule,
    AXLabelComponent,
    AXSwitchComponent,
    AXDateTimePickerComponent,
    AXDecoratorGenericComponent,
  ],
})
export class ConstraintsComponent {
  selectedValue = signal<Date | null>(new Date());
  useMinMax = signal<boolean>(false);
  useDisabledDates = signal<boolean>(false);
  useHolidays = signal<boolean>(false);

  // Min/Max constraints
  minValue = new Date();
  maxValue = new Date();

  // Disabled dates (weekends)
  disabledDates: Date[] = [];

  // Holiday dates
  holidayDates: Date[] = [];

  constructor() {
    // Set min/max to current month
    const now = new Date();
    this.minValue = new Date(now.getFullYear(), now.getMonth(), 10);
    this.maxValue = new Date(now.getFullYear(), now.getMonth(), 20);

    // Generate disabled dates (weekends for current month)
    this.generateDisabledDates();

    // Generate holiday dates (example: 15th of current month)
    this.generateHolidayDates();
  }

  private generateDisabledDates() {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), 0);
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      if (d.getDay() === 5 || d.getDay() === 6) {
        // Sunday or Saturday
        this.disabledDates.push(new Date(d));
      }
    }
  }

  private generateHolidayDates() {
    const now = new Date();
    this.holidayDates = [
      new Date(now.getFullYear(), now.getMonth(), 15),
      new Date(now.getFullYear(), now.getMonth(), 20),
    ];
  }

  clearSelection() {
    this.selectedValue.set(null);
  }
}
