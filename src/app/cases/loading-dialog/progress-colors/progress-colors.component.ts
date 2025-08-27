import { AXButtonComponent } from '@acorex/components/button';
import {
  AXLoadingDialogModule,
  AXLoadingDialogService,
} from '@acorex/components/loading-dialog';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './progress-colors.component.html',
  imports: [AXLoadingDialogModule, AXButtonComponent],
})
export class ProgressColorsComponent {
  private loadingDialog = inject(AXLoadingDialogService);

  handleOpenDialog() {
    const d = this.loadingDialog.show({
      title: 'System check in progress...',
      mode: 'determinate',
      progressColor: 'primary',
      progressValue: 0,
      status: '0/4 checks',
      text: 'Starting system check...',
      buttons: [
        {
          text: 'Skip',
          color: 'warning',
          look: 'outline',
          onClick: () => {
            d.close();
          },
        },
      ],
    });

    // Simulate system checks with different colors
    setTimeout(() => {
      d.setProgressValue(25);
      d.setProgressText('Checking network connectivity...');
      d.setProgressStatus('1/4 checks');
      d.setProgressColor('primary');
    }, 1000);

    setTimeout(() => {
      d.setProgressValue(50);
      d.setProgressText('Validating security protocols...');
      d.setProgressStatus('2/4 checks');
      d.setProgressColor('warning');
    }, 2000);

    setTimeout(() => {
      d.setProgressValue(75);
      d.setProgressText('Testing database connection...');
      d.setProgressStatus('3/4 checks');
      d.setProgressColor('danger');
    }, 3000);

    setTimeout(() => {
      d.setProgressValue(100);
      d.setProgressText('All systems operational!');
      d.setProgressStatus('4/4 checks');
      d.setProgressColor('success');
    }, 4000);

    setTimeout(() => {
      d.close();
    }, 6000);
  }
}
