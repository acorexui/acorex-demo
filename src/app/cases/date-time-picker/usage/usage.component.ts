import { AXButtonComponent } from '@acorex/components/button';
import { AXDateTimePickerComponent } from '@acorex/components/datetime-picker';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  imports: [
    FormsModule,
    AXButtonComponent,
    AXDateTimePickerComponent,
    AXDecoratorGenericComponent,
  ],
})
export class UsageComponent {
  selectedDateTime = signal<Date | null>(new Date());

  resetToNow() {
    this.selectedDateTime.set(new Date());
  }
}
