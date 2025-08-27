import { AXButtonComponent } from '@acorex/components/button';
import {
  AXLoadingDialogModule,
  AXLoadingDialogService,
} from '@acorex/components/loading-dialog';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './indeterminate.component.html',
  imports: [AXLoadingDialogModule, AXButtonComponent],
})
export class IndeterminateComponent {
  private loadingDialog = inject(AXLoadingDialogService);

  handleOpenDialog() {
    const d = this.loadingDialog.show({
      title: 'Processing data...',
      mode: 'indeterminate',
      progressColor: 'primary',
      text: 'Please wait while we process your request',
      status: 'Processing...',
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

    // Simulate processing time
    setTimeout(() => {
      d.setProgressText('Almost done...');
      d.setProgressStatus('Finalizing...');
    }, 3000);

    setTimeout(() => {
      d.setProgressText('Complete!');
      d.setProgressStatus('Success');
      d.setProgressColor('success');
    }, 6000);

    setTimeout(() => {
      d.close();
    }, 8000);
  }
}
