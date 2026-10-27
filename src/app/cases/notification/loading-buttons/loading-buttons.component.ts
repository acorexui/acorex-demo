import { AXButtonComponent } from '@acorex/components/button';
import { AXLoadingComponent } from '@acorex/components/loading';
import {
  AXNotificationModule,
  AXNotificationService,
} from '@acorex/components/notification';
import { Component, inject, signal } from '@angular/core';

@Component({
  imports: [AXButtonComponent, AXLoadingComponent],
  template: `
    <p class="m-0 leading-5">
      Buttons can show loading states during operations.
    </p>
    <div class="mt-3 flex flex-wrap gap-3">
      <ax-button
        class="ax-xs"
        color="primary"
        look="solid"
        [text]="label()"
        [disabled]="loading()"
        (onClick)="startLoading()"
      >
        @if (loading()) {
          <ax-loading [visible]="true"></ax-loading>
        }
      </ax-button>
      <ax-button
        class="ax-xs"
        color="default"
        look="solid"
        text="Cancel"
        (onClick)="onCancel()"
      ></ax-button>
    </div>
  `,
})
class LoadingButtonsContentComponent {
  protected readonly loading = signal(false);
  protected readonly label = signal('Start Loading');

  protected startLoading(): void {
    if (this.loading()) {
      return;
    }
    this.loading.set(true);
    this.label.set('Loading...');
    setTimeout(() => {
      this.loading.set(false);
      this.label.set('Completed!');
    }, 3000);
  }

  protected onCancel(): void {
    alert('Operation cancelled');
  }
}

@Component({
  templateUrl: './loading-buttons.component.html',
  imports: [AXButtonComponent, AXNotificationModule],
})
export class LoadingButtonsComponent {
  private readonly notificationService = inject(AXNotificationService);

  protected show(): void {
    this.notificationService.show({
      title: 'Loading Buttons',
      content: LoadingButtonsContentComponent,
      color: 'warning',
      location: 'bottom-center',
      closeButton: false,
    });
  }
}
