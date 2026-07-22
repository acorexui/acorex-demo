import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXNumberBoxComponent } from '@acorex/components/number-box';

import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'demo-number-box-step-size',
  templateUrl: './step.component.html',
  imports: [AXNumberBoxComponent, AXDecoratorModule, FormsModule],
})
export class NumberBoxStepSizeComponent {
  protected readonly caption =
    'Configure the increment and decrement step size';

  protected readonly valueStep1 = signal(10);
  protected readonly valueStep5 = signal(50);
  protected readonly valueStep25 = signal(100);
}
