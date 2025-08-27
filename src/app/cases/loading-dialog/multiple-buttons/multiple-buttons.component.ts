import { AXButtonComponent } from '@acorex/components/button';
import {
  AXLoadingDialogModule,
  AXLoadingDialogService,
} from '@acorex/components/loading-dialog';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './multiple-buttons.component.html',
  imports: [AXLoadingDialogModule, AXButtonComponent],
})
export class MultipleButtonsComponent {
  private loadingDialog = inject(AXLoadingDialogService);

  handleOpenDialog() {
    let isPaused = false;
    let currentProgress = 0;
    let progressInterval: any;

    const d = this.loadingDialog.show({
      title: 'Uploading files...',
      mode: 'determinate',
      progressColor: 'primary',
      progressValue: 0,
      status: '0/5 files',
      text: 'Preparing upload...',
      buttons: [
        {
          text: 'Pause',
          color: 'warning',
          look: 'outline',
          onClick: () => {
            if (isPaused) {
              // Resume
              isPaused = false;
              d.setProgressText('Resuming upload...');
              d.setProgressStatus('Resuming...');
            } else {
              // Pause
              isPaused = true;
              d.setProgressText('Upload paused');
              d.setProgressStatus('Paused');
            }
          },
        },
        {
          text: 'Cancel',
          color: 'danger',
          look: 'outline',
          onClick: () => {
            d.setProgressText('Cancelling upload...');
            d.setProgressStatus('Cancelled');
            d.setProgressColor('danger');
            setTimeout(() => {
              d.close();
            }, 1000);
          },
        },
        {
          text: 'Continue',
          color: 'success',
          onClick: () => {
            // Skip to next file
            currentProgress = Math.min(currentProgress + 20, 100);
            d.setProgressValue(currentProgress);
            d.setProgressText(
              `Skipped to file ${Math.floor(currentProgress / 20) + 1}/5`
            );
            d.setProgressStatus(
              `${Math.floor(currentProgress / 20) + 1}/5 files`
            );

            if (currentProgress >= 100) {
              d.setProgressText('Upload complete!');
              d.setProgressStatus('5/5 files');
              d.setProgressColor('success');
            }
          },
        },
      ],
    });

    // Simulate file upload progress with pause/resume functionality
    const updateProgress = () => {
      if (!isPaused && currentProgress < 100) {
        currentProgress += 2;
        d.setProgressValue(currentProgress);

        const fileNumber = Math.floor(currentProgress / 20) + 1;
        d.setProgressText(`Uploading file ${fileNumber}/5...`);
        d.setProgressStatus(`${fileNumber}/5 files`);

        if (currentProgress >= 100) {
          d.setProgressText('Upload complete!');
          d.setProgressStatus('5/5 files');
          d.setProgressColor('success');
          clearInterval(progressInterval);
        }
      }
    };

    progressInterval = setInterval(updateProgress, 100);

    // Auto-close after completion
    setTimeout(() => {
      if (currentProgress >= 100) {
        d.close();
      }
    }, 7000);
  }
}
