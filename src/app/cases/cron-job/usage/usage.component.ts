import { Component, signal, viewChild } from '@angular/core';
import { AXCronJobModule } from '@acorex/components/cron-job';
import { AXValueChangedEvent } from '@acorex/components/common';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './usage.component.html',
  imports: [AXCronJobModule, FormsModule],
})
export class UsageComponent {
  expreesion = signal('* * * ? * * *');

  getExpreesionHandler(e: AXValueChangedEvent) {
    console.log(e.value);
  }
}
