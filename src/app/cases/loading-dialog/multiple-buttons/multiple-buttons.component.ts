import { AXButtonComponent } from '@acorex/components/button';
import {
  AXLoadingDialogModule,
  AXLoadingDialogService,
} from '@acorex/components/loading-dialog';
import { Component, inject } from '@angular/core';

const FILE_COUNT = 5;
const PROGRESS_STEP = 100 / FILE_COUNT;

@Component({
  templateUrl: './multiple-buttons.component.html',
  imports: [AXLoadingDialogModule, AXButtonComponent],
})
export class MultipleButtonsComponent {
  private loadingDialog = inject(AXLoadingDialogService);

  handleOpenDialog(): void {
    let paused = false;
    let progress = 0;
    let progressInterval: ReturnType<typeof setInterval>;

    const fileIndex = (value: number) =>
      Math.min(Math.floor(value / PROGRESS_STEP) + 1, FILE_COUNT);

    const d = this.loadingDialog.show({
      title: 'Uploading files...',
      mode: 'determinate',
      progressColor: 'primary',
      progressValue: 0,
      status: `0/${FILE_COUNT} files`,
      text: 'Preparing upload...',
      buttons: [
        {
          text: 'Pause',
          color: 'warning',
          look: 'outline',
          onClick: () => {
            paused = !paused;
            d.setProgressText(paused ? 'Upload paused' : 'Resuming upload...');
            d.setProgressStatus(paused ? 'Paused' : 'Resuming...');
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
            setTimeout(() => d.close(), 1000);
          },
        },
        {
          text: 'Continue',
          color: 'success',
          onClick: () => {
            progress = Math.min(progress + PROGRESS_STEP, 100);
            d.setProgressValue(progress);
            const index = fileIndex(progress);
            d.setProgressText(`Skipped to file ${index}/${FILE_COUNT}`);
            d.setProgressStatus(`${index}/${FILE_COUNT} files`);
            if (progress >= 100) {
              finishUpload();
            }
          },
        },
      ],
    });

    const finishUpload = () => {
      d.setProgressText('Upload complete!');
      d.setProgressStatus(`${FILE_COUNT}/${FILE_COUNT} files`);
      d.setProgressColor('success');
      clearInterval(progressInterval);
    };

    progressInterval = setInterval(() => {
      if (paused || progress >= 100) {
        return;
      }

      progress += 2;
      d.setProgressValue(progress);
      const index = fileIndex(progress);
      d.setProgressText(`Uploading file ${index}/${FILE_COUNT}...`);
      d.setProgressStatus(`${index}/${FILE_COUNT} files`);

      if (progress >= 100) {
        finishUpload();
      }
    }, 100);

    setTimeout(() => {
      if (progress >= 100) {
        d.close();
      }
    }, 7000);
  }
}
