import { AXButtonComponent } from '@acorex/components/button';
import {
  AXLoadingDialogModule,
  AXLoadingDialogService,
} from '@acorex/components/loading-dialog';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './button-states.component.html',
  imports: [AXLoadingDialogModule, AXButtonComponent],
})
export class ButtonStatesComponent {
  private loadingDialog = inject(AXLoadingDialogService);

  handleOpenDialog() {
    let retryEnabled = false;
    let confirmLoading = true;
    let paymentStep = 0;

    const d = this.loadingDialog.show({
      title: 'Processing payment...',
      mode: 'determinate',
      progressColor: 'primary',
      progressValue: 0,
      status: 'Validating...',
      text: 'Please wait while we process your payment',
      buttons: [
        {
          text: 'Retry',
          color: 'warning',
          disabled: true,
          onClick: () => {
            // Reset to validation step
            paymentStep = 0;
            d.setProgressValue(0);
            d.setProgressText('Retrying payment validation...');
            d.setProgressStatus('Validating...');
            d.setProgressColor('primary');
            d.setDialogTitle('Processing payment...');

            // Disable retry button again
            retryEnabled = false;

            // Restart the payment process
            setTimeout(() => {
              paymentStep = 1;
              d.setProgressValue(25);
              d.setProgressText('Validating card details...');
              d.setProgressStatus('Validating...');
            }, 1000);
          },
        },
        {
          text: 'Cancel',
          color: 'danger',
          onClick: () => {
            d.setProgressText('Payment cancelled by user');
            d.setProgressStatus('Cancelled');
            d.setProgressColor('danger');
            d.setDialogTitle('Payment Cancelled');
            setTimeout(() => {
              d.close();
            }, 2000);
          },
        },
        {
          text: 'Confirm',
          color: 'success',
          loading: true,
          onClick: () => {
            // Toggle loading state
            confirmLoading = !confirmLoading;

            if (confirmLoading) {
              d.setProgressText('Confirming payment...');
              d.setProgressStatus('Confirming...');
            } else {
              d.setProgressText('Payment confirmed!');
              d.setProgressStatus('Confirmed');
              d.setProgressColor('success');
              d.setDialogTitle('Payment Confirmed');
            }
          },
        },
      ],
    });

    // Simulate payment processing with button state changes
    setTimeout(() => {
      paymentStep = 1;
      d.setProgressValue(25);
      d.setProgressText('Validating card details...');
      d.setProgressStatus('Validating...');
    }, 1000);

    setTimeout(() => {
      paymentStep = 2;
      d.setProgressValue(50);
      d.setProgressText('Processing payment...');
      d.setProgressStatus('Processing...');
      d.setDialogTitle('Payment Processing...');

      // Enable retry button after validation
      retryEnabled = true;
    }, 2000);

    setTimeout(() => {
      paymentStep = 3;
      d.setProgressValue(75);
      d.setProgressText('Finalizing transaction...');
      d.setProgressStatus('Finalizing...');
    }, 3000);

    setTimeout(() => {
      paymentStep = 4;
      d.setProgressValue(100);
      d.setProgressText('Payment successful!');
      d.setProgressStatus('Complete');
      d.setProgressColor('success');
      d.setDialogTitle('Payment Complete');

      // Disable retry button on success
      retryEnabled = false;
    }, 4000);

    setTimeout(() => {
      d.close();
    }, 6000);
  }
}
