import { AXButtonModule } from '@acorex/components/button';
import { AXDialogModule, AXDialogService } from '@acorex/components/dialog';
import { Component, inject, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    templateUrl: 'asynchronous-process.component.html',
    imports: [AXButtonModule, AXDialogModule]
})
export class AsynchronousProcessComponent {
  private _dialogService: AXDialogService = inject(AXDialogService);

  _handleAsyncClick() {
    const subject = new Subject();
    subject.subscribe((status) => {
      console.log(`The process has been "${status}".`);
    });
    const dialog = this._dialogService.open({
      content: 'Are you sure you want to permanently delete the file?',
      title: 'Delete File',
      type: 'danger',
      orientation: 'horizontal',
      buttons: [
        {
          text: 'Delete',
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
              }
            }, 3000);
          },
        },
        {
          text: 'Cancel',
          color: 'ghost',
          autofocus: true,
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
