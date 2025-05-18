import { Component, signal } from '@angular/core';
import { AXCronJobModule } from '@acorex/components/cron-job';
import { AXValueChangedEvent } from '@acorex/cdk/common';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './usage.component.html',
  imports: [AXCronJobModule, FormsModule],
})
export class UsageComponent {
  expression = signal('* * * ? * * *');

  getExpressionHandler(e: AXValueChangedEvent) {
    console.log(e.value);
  }
}
