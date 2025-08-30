import { AXButtonComponent } from '@acorex/components/button';
import {
  AXNotificationModule,
  AXNotificationService,
} from '@acorex/components/notification';
import { Component, inject } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  templateUrl: './asynchronous-process.component.html',
  imports: [AXButtonComponent, AXNotificationModule],
})
export class AsynchronousProcesseDecoratorComponent {
  private notificationService = inject(AXNotificationService);

  showAsyncNotification() {
    const subject = new Subject();

    const notification = this.notificationService.show({
      title: 'Delete File',
      content: 'Are you sure you want to permanently delete the file?',
      color: 'danger',
      location: 'bottom-end',
      closeButton: false,
      buttons: [
        {
          text: 'Delete',
          color: 'danger',
          onClick: (e) => {
            if (e) {
              e.handled = true;
              e.source.text = 'Deleting...';
              e.source.disabled = true;
              e.source.loading = true;
            }
            subject.next('Started');

            setTimeout(() => {
              if (!subject.closed) {
                subject.next('Completed');
                subject.complete();
                notification.close();
                alert('File deleted successfully!');
              }
            }, 3000);
          },
        },
        {
          text: 'Cancel',
          color: 'default',
          onClick: () => {
            if (!subject.closed) {
              subject.next('Canceled');
              notification.close();
            }
          },
        },
      ],
    });
  }

  showProgressNotification() {
    const notification = this.notificationService.show({
      title: 'Processing Data',
      content: 'Please wait while we process your data...',
      color: 'primary',
      location: 'top-center',
      timeOut: 5000,
      timeOutProgress: true,
      pauseOnHover: false,
    });
  }
}
