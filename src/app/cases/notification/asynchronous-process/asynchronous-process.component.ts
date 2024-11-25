import { Component } from '@angular/core';
import { AXButtonModule } from '@acorex/components/button';
import { Subject } from 'rxjs';
import {
  AXNotificationModule,
  AXNotificationService,
} from '@acorex/components/notification';

@Component({
    templateUrl: './asynchronous-process.component.html',
    imports: [AXButtonModule, AXNotificationModule]
})
export class AsynchronousProcesseDecoratorComponent {
  constructor(private notificationService: AXNotificationService) {}
  _handleAsyncClick() {
    const subject = new Subject();
    const dialog = this.notificationService.show({
      content: 'Are you sure you want to permanently delete the file?',
      title: 'Delete File',
      color: 'danger',
      location: 'bottom-end',
      buttons: [
        {
          text: 'delete',
          color: 'danger',
          onClick: (e: any) => {
            e.handled = true;
            e.source.text = 'Deleting...';
            e.source.disabled = true;
            e.source.loading = true;
            subject.next('Started');
            setTimeout(() => {
              if (!subject.closed) {
                subject.next('Completed');
                subject.complete();
                dialog.close();
                alert('Notification Done.');
              }
            }, 3000);
          },
        },
        {
          text: 'cancel',
          color: 'ghost',
          onClick: (e) => {
            if (!subject.closed) {
              subject.next('Canceled');
              dialog.close();
            }
          },
        },
      ],
      closeButton: false,
    });
  }
}
