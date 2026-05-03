import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXNumberBoxComponent } from '@acorex/components/number-box';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'demo-number-box-max-min-value',
  templateUrl: './maxminvaluse.component.html',
  imports: [AXNumberBoxComponent, AXDecoratorModule, FormsModule, CommonModule],
})
export class NumberBoxMaxMinValueComponent {
  /** Clamped between 0 and 100 */
  protected readonly value0100 = signal(50);

  /** Clamped between -20 and 20 */
  protected readonly valueNegPos = signal(0);
}
