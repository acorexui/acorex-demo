import { AXValueChangedEvent } from '@acorex/cdk/common';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXPickerModule } from '@acorex/components/picker';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type PickerDateItem = { id: number; text: number | string };

const MONTHS: PickerDateItem[] = [
  { id: 1, text: 'January' },
  { id: 2, text: 'February' },
  { id: 3, text: 'March' },
  { id: 4, text: 'April' },
  { id: 5, text: 'May' },
  { id: 6, text: 'June' },
  { id: 7, text: 'July' },
  { id: 8, text: 'August' },
  { id: 9, text: 'September' },
  { id: 10, text: 'October' },
  { id: 11, text: 'November' },
  { id: 12, text: 'December' },
];

@Component({
  templateUrl: './date.component.html',
  imports: [AXPickerModule, FormsModule, AXDecoratorModule],
})
export class PickerDateComponent {
  protected readonly months = signal(MONTHS);

  protected readonly days = signal<PickerDateItem[]>(
    Array.from({ length: 31 }, (_, i) => ({
      id: i + 1,
      text: i + 1,
    })),
  );

  protected readonly years = signal<PickerDateItem[]>(
    Array.from({ length: 11 }, (_, i) => ({
      id: 2020 + i,
      text: 2020 + i,
    })),
  );

  protected readonly selectedMonth = signal<PickerDateItem>(MONTHS[0]);
  protected readonly selectedDay = signal<PickerDateItem>(this.days()[14]);
  protected readonly selectedYear = signal<PickerDateItem>(this.years()[4]);

  protected readonly formattedDate = computed(() => {
    const month = this.selectedMonth().text;
    const day = this.selectedDay().text;
    const year = this.selectedYear().text;
    return `${month} ${day}, ${year}`;
  });

  protected onMonthChanged(event: AXValueChangedEvent<PickerDateItem>): void {
    if (event.value) {
      this.selectedMonth.set(event.value);
    }
  }

  protected onDayChanged(event: AXValueChangedEvent<PickerDateItem>): void {
    if (event.value) {
      this.selectedDay.set(event.value);
    }
  }

  protected onYearChanged(event: AXValueChangedEvent<PickerDateItem>): void {
    if (event.value) {
      this.selectedYear.set(event.value);
    }
  }
}
