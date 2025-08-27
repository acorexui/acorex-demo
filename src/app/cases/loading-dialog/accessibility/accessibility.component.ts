import { AXButtonComponent } from '@acorex/components/button';
import {
  AXLoadingDialogModule,
  AXLoadingDialogService,
} from '@acorex/components/loading-dialog';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './accessibility.component.html',
  imports: [AXLoadingDialogModule, AXButtonComponent],
})
export class AccessibilityComponent {
  private loadingDialog = inject(AXLoadingDialogService);

  handleOpenDialog() {
    let timeouts: any[] = [];
    let currentStep = 0;

    const clearAllTimeouts = () => {
      timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
      timeouts = [];
    };

    const startProgress = () => {
      // Simulate accessibility testing
      const timeout1 = setTimeout(() => {
        currentStep = 1;
        d.setProgressValue(33);
        d.setProgressText(
          'Testing keyboard navigation (Tab, Shift+Tab, Arrow keys)...'
        );
        d.setProgressStatus('1/3 tests');
      }, 1000);
      timeouts.push(timeout1);

      const timeout2 = setTimeout(() => {
        currentStep = 2;
        d.setProgressValue(66);
        d.setProgressText(
          'Testing screen reader compatibility and ARIA attributes...'
        );
        d.setProgressStatus('2/3 tests');
      }, 2000);
      timeouts.push(timeout2);

      const timeout3 = setTimeout(() => {
        currentStep = 3;
        d.setProgressValue(100);
        d.setProgressText('Accessibility test completed successfully!');
        d.setProgressStatus('3/3 tests');
        d.setProgressColor('success');
      }, 3000);
      timeouts.push(timeout3);

      const timeout4 = setTimeout(() => {
        d.close();
      }, 5000);
      timeouts.push(timeout4);
    };

    const d = this.loadingDialog.show({
      title: 'Accessibility Test Dialog',
      mode: 'determinate',
      progressColor: 'primary',
      progressValue: 0,
      status: '0/3 tests',
      text: 'Testing keyboard navigation and focus management...',
      buttons: [
        {
          text: 'Skip Test',
          color: 'warning',
          look: 'outline',
          hotkey: 'Escape',
          onClick: () => {
            clearAllTimeouts();
            d.close();
          },
        },
        {
          text: 'Retry Test',
          color: 'primary',
          hotkey: 'Enter',
          autofocus: true,
          onClick: () => {
            // Clear all existing timeouts
            clearAllTimeouts();

            // Reset progress state
            currentStep = 0;
            d.setProgressValue(0);
            d.setProgressText('Restarting accessibility test...');
            d.setProgressStatus('0/3 tests');
            d.setProgressColor('primary');

            // Start fresh progress
            startProgress();
          },
        },
        {
          text: 'Complete Test',
          color: 'success',
          hotkey: 'Space',
          onClick: () => {
            // Skip to completion
            clearAllTimeouts();
            d.setProgressValue(100);
            d.setProgressText('Accessibility test completed successfully!');
            d.setProgressStatus('3/3 tests');
            d.setProgressColor('success');

            setTimeout(() => {
              d.close();
            }, 2000);
          },
        },
      ],
    });

    // Start initial progress
    startProgress();
  }
}
