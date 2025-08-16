import { AXButtonComponent } from '@acorex/components/button';
import {
  AXLoadingDialogModule,
  AXLoadingDialogService,
} from '@acorex/components/loading-dialog';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './usage.component.html',
  imports: [AXLoadingDialogModule, AXButtonComponent],
})
export class UsageComponent {
  private loadingDialog = inject(AXLoadingDialogService);

  handleOpenDialog() {
    const d = this.loadingDialog.show({
      title: 'Setting up users...',
      mode: 'determinate',
      progressColor: 'danger',
      progressValue: 0,
      status: '0/10',
      text: 'Waiting...',
      buttons: [
        {
          text: 'Cancel',
          color: 'danger',
          onClick: () => {
            d.close();
          },
        },
      ],
    });
    setTimeout(() => {
      d.setProgressColor('warning');
      d.setProgressText('Processing...');
      d.setProgressValue(50);
      d.setProgressStatus('5/10');
    }, 2000);

    setTimeout(() => {
      d.setProgressColor('success');
      d.setProgressText('finished');
      d.setProgressValue(100);
      d.setProgressStatus('10/10');
    }, 4000);

    setTimeout(() => {
      d.close();
    }, 5000);
  }
}
