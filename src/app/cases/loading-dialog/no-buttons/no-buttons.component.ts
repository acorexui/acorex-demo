import { AXButtonComponent } from '@acorex/components/button';
import {
  AXLoadingDialogModule,
  AXLoadingDialogService,
} from '@acorex/components/loading-dialog';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './no-buttons.component.html',
  imports: [AXLoadingDialogModule, AXButtonComponent],
})
export class NoButtonsComponent {
  private loadingDialog = inject(AXLoadingDialogService);

  handleOpenDialog() {
    const d = this.loadingDialog.show({
      title: 'Saving your work...',
      mode: 'indeterminate',
      progressColor: 'primary',
      text: 'Please do not close this window while we save your progress',
      status: 'Saving...',
      // No buttons array - dialog will show without buttons
    });

    // Simulate saving process
    setTimeout(() => {
      d.setProgressText('Compressing data...');
      d.setProgressStatus('Compressing...');
    }, 2000);

    setTimeout(() => {
      d.setProgressText('Writing to disk...');
      d.setProgressStatus('Writing...');
    }, 4000);

    setTimeout(() => {
      d.setProgressText('Verifying save...');
      d.setProgressStatus('Verifying...');
    }, 6000);

    setTimeout(() => {
      d.setProgressText('Save complete!');
      d.setProgressStatus('Complete');
      d.setProgressColor('success');
    }, 8000);

    setTimeout(() => {
      d.close();
    }, 10000);
  }
}
