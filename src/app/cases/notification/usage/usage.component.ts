import { AXLocation, AXStyleColorType } from '@acorex/cdk/common';
import { AXButtonComponent } from '@acorex/components/button';
import {
  AXNotificationModule,
  AXNotificationService,
} from '@acorex/components/notification';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type NotificationDemoType = 'success' | 'primary' | 'warning' | 'danger';

@Component({
  templateUrl: './usage.component.html',
  imports: [
    AXButtonComponent,
    AXNotificationModule,
    AXSelectBoxComponent,
    FormsModule,
  ],
})
export class UsageComponent {
  private readonly notificationService = inject(AXNotificationService);

  protected readonly selectedType = signal<NotificationDemoType>('success');

  protected readonly typeOptions = [
    { text: 'Success Notification', value: 'success' as const },
    { text: 'Info Notification', value: 'primary' as const },
    { text: 'Warning Notification', value: 'warning' as const },
    { text: 'Error Notification', value: 'danger' as const },
  ];

  protected readonly selectedButtonText = computed(
    () =>
      this.typeOptions.find((o) => o.value === this.selectedType())?.text ??
      'Success Notification',
  );

  private readonly presets: Record<
    NotificationDemoType,
    {
      title: string;
      content: string;
      color: AXStyleColorType;
      location: AXLocation;
    }
  > = {
    success: {
      title: 'Success!',
      content: 'Your action was completed successfully.',
      color: 'success',
      location: 'top-end',
    },
    primary: {
      title: 'Information',
      content: 'Here is some important information for you.',
      color: 'primary',
      location: 'top-center',
    },
    warning: {
      title: 'Warning',
      content: 'Please review your input before proceeding.',
      color: 'warning',
      location: 'top-start',
    },
    danger: {
      title: 'Error',
      content: 'Something went wrong. Please try again.',
      color: 'danger',
      location: 'bottom-end',
    },
  };

  protected showNotification(): void {
    const preset = this.presets[this.selectedType()];
    this.notificationService.show({
      title: preset.title,
      content: preset.content,
      color: preset.color,
      location: preset.location,
    });
  }
}
