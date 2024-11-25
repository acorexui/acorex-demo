import { Component } from '@angular/core';
import { AXButtonModule } from '@acorex/components/button';
import { Subject } from 'rxjs';
import {
  AXNotificationModule,
  AXNotificationService,
} from '@acorex/components/notification';

@Component({
    templateUrl: './usage.component.html',
    imports: [AXButtonModule, AXNotificationModule]
})
export class UsageComponent {
  constructor(private notificationService: AXNotificationService) {}
  _handleClick() {
    const dialog = this.notificationService.show({
      content: 'Are you sure?',
      title: 'Task',
      color: 'warning',
      location: 'top-end',
      buttons: [
        {
          text: 'Yes',
          color: 'warning',
          onClick: () => {
            dialog.close();
          },
        },
        {
          text: 'No',
          color: 'ghost',
          onClick: () => {
            dialog.close();
          },
        },
      ],
    });
  }
}
