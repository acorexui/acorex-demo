import { AXButtonComponent } from '@acorex/components/button';
import {
  AXLoadingDialogModule,
  AXLoadingDialogService,
} from '@acorex/components/loading-dialog';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './long-text.component.html',
  imports: [AXLoadingDialogModule, AXButtonComponent],
})
export class LongTextComponent {
  private loadingDialog = inject(AXLoadingDialogService);

  handleOpenDialog() {
    const d = this.loadingDialog.show({
      title:
        'This is a very long dialog title that demonstrates how the component handles text overflow and wrapping in the header section of the loading dialog component',
      mode: 'determinate',
      progressColor: 'primary',
      progressValue: 0,
      status: '0/100 steps completed',
      text: 'This is an extremely long progress text that demonstrates how the loading dialog component handles very long text content in the progress description area. The text should wrap properly and maintain readability while providing detailed information about the current operation being performed.',
      buttons: [
        {
          text: 'Cancel this very long operation',
          color: 'danger',
          look: 'outline',
          onClick: () => {
            d.close();
          },
        },
        {
          text: 'Continue with the process',
          color: 'success',
          onClick: () => {
            console.log('Continue clicked');
          },
        },
      ],
    });

    // Simulate progress with long text updates
    setTimeout(() => {
      d.setProgressValue(25);
      d.setProgressText(
        'Processing the first batch of data which contains a very large amount of information that needs to be analyzed and processed according to the specified business rules and requirements'
      );
      d.setProgressStatus('25/100 steps completed');
    }, 1000);

    setTimeout(() => {
      d.setProgressValue(50);
      d.setProgressText(
        'Validating and cross-referencing the processed data with external systems and databases to ensure data integrity and consistency across all related records and entries'
      );
      d.setProgressStatus('50/100 steps completed');
    }, 2000);

    setTimeout(() => {
      d.setProgressValue(75);
      d.setProgressText(
        'Performing final quality assurance checks and generating comprehensive reports that summarize all the operations and provide detailed analytics and insights'
      );
      d.setProgressStatus('75/100 steps completed');
    }, 3000);

    setTimeout(() => {
      d.setProgressValue(100);
      d.setProgressText(
        'All operations have been completed successfully! The system has finished processing all the data and the results are now available for review and further analysis.'
      );
      d.setProgressStatus('100/100 steps completed');
      d.setProgressColor('success');
    }, 4000);

    setTimeout(() => {
      d.close();
    }, 6000);
  }
}
