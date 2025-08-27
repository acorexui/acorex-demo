import { AXButtonComponent } from '@acorex/components/button';
import {
  AXLoadingDialogModule,
  AXLoadingDialogService,
} from '@acorex/components/loading-dialog';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './dynamic-updates.component.html',
  imports: [AXLoadingDialogModule, AXButtonComponent],
})
export class DynamicUpdatesComponent {
  private loadingDialog = inject(AXLoadingDialogService);

  handleOpenDialog() {
    let timeouts: any[] = [];
    let currentStep = 0;

    const clearAllTimeouts = () => {
      timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
      timeouts = [];
    };

    const startProgress = () => {
      // Comprehensive dynamic updates
      const timeout1 = setTimeout(() => {
        currentStep = 1;
        d.setProgressValue(10);
        d.setProgressText('Loading configuration files...');
        d.setProgressStatus('10%');
        d.setDialogTitle('Loading configuration...');
      }, 1000);
      timeouts.push(timeout1);

      const timeout2 = setTimeout(() => {
        currentStep = 2;
        d.setProgressValue(25);
        d.setProgressText('Initializing database connections...');
        d.setProgressStatus('25%');
        d.setProgressColor('warning');
        d.setDialogTitle('Database initialization...');
      }, 2000);
      timeouts.push(timeout2);

      const timeout3 = setTimeout(() => {
        currentStep = 3;
        d.setProgressValue(40);
        d.setProgressText('Setting up user sessions...');
        d.setProgressStatus('40%');
        d.setProgressColor('primary');
        d.setDialogTitle('Session setup...');
      }, 3000);
      timeouts.push(timeout3);

      const timeout4 = setTimeout(() => {
        currentStep = 4;
        d.setProgressValue(60);
        d.setProgressText('Loading user preferences...');
        d.setProgressStatus('60%');
        d.setDialogTitle('Loading preferences...');
      }, 4000);
      timeouts.push(timeout4);

      const timeout5 = setTimeout(() => {
        currentStep = 5;
        d.setProgressValue(80);
        d.setProgressText('Finalizing setup...');
        d.setProgressStatus('80%');
        d.setProgressColor('success');
        d.setDialogTitle('Finalizing...');
      }, 5000);
      timeouts.push(timeout5);

      const timeout6 = setTimeout(() => {
        currentStep = 6;
        d.setProgressValue(100);
        d.setProgressText('Application ready!');
        d.setProgressStatus('100%');
        d.setDialogTitle('Initialization complete');
      }, 6000);
      timeouts.push(timeout6);

      const timeout7 = setTimeout(() => {
        d.close();
      }, 8000);
      timeouts.push(timeout7);
    };

    const d = this.loadingDialog.show({
      title: 'Initializing application...',
      mode: 'determinate',
      progressColor: 'primary',
      progressValue: 0,
      status: '0%',
      text: 'Starting initialization...',
      buttons: [
        {
          text: 'Restart',
          color: 'warning',
          look: 'outline',
          onClick: () => {
            // Clear all existing timeouts
            clearAllTimeouts();

            // Reset progress state
            currentStep = 0;
            d.setProgressValue(0);
            d.setProgressText('Restarting initialization...');
            d.setProgressStatus('0%');
            d.setProgressColor('primary');
            d.setDialogTitle('Restarting application...');

            // Start fresh progress
            startProgress();
          },
        },
        {
          text: 'Cancel',
          color: 'danger',
          onClick: () => {
            clearAllTimeouts();
            d.close();
          },
        },
      ],
    });

    // Start initial progress
    startProgress();
  }
}
