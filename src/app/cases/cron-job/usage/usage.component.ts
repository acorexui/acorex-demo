import { Component } from '@angular/core';
import { AXCronJobModule } from '@acorex/components/cron-job';
import { AXClickEvent } from '@acorex/components/common';

@Component({
  templateUrl: './usage.component.html',
  standalone: true,
  imports: [AXCronJobModule],
})
export class UsageComponent {
  getExpreesionHandler(e: AXClickEvent) {
    console.log(e.data);
  }
}
