import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXNumberBoxModule } from '@acorex/components/number-box';

import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './separator.component.html',
  imports: [AXNumberBoxModule, AXDecoratorModule, FormsModule],
})
export class SeparatorComponent {
  protected readonly value = signal(1_234_567);
  protected readonly thousandsSeparator = ',';
}
