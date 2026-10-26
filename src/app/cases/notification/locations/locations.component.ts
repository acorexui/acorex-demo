import { AXLocation, AXStyleColorType } from '@acorex/cdk/common';
import { AXButtonComponent } from '@acorex/components/button';
import {
  AXNotificationModule,
  AXNotificationService,
} from '@acorex/components/notification';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type LocationDemoKey =
  | 'top-start'
  | 'top-center'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-center'
  | 'bottom-end'
  | 'all';

@Component({
  templateUrl: './locations.component.html',
  imports: [AXButtonComponent, AXNotificationModule, AXSelectBoxComponent, FormsModule],
})
export class LocationsComponent {
  private readonly notificationService = inject(AXNotificationService);

  protected readonly selectedLocation = signal<LocationDemoKey>('top-start');

  protected readonly locationOptions = [
    { text: 'Top Start', value: 'top-start' as const },
    { text: 'Top Center', value: 'top-center' as const },
    { text: 'Top End', value: 'top-end' as const },
    { text: 'Bottom Start', value: 'bottom-start' as const },
    { text: 'Bottom Center', value: 'bottom-center' as const },
    { text: 'Bottom End', value: 'bottom-end' as const },
    { text: 'Show All Locations', value: 'all' as const },
  ];

  protected readonly selectedButtonText = computed(
    () =>
      this.locationOptions.find((o) => o.value === this.selectedLocation())
        ?.text ?? 'Top Start',
  );

  protected readonly selectedButtonColor = computed((): AXStyleColorType => {
    const key = this.selectedLocation();
    if (key === 'all') {
      return 'primary';
    }
    return this.presets[key].color;
  });

  private readonly presets: Record<
    Exclude<LocationDemoKey, 'all'>,
    {
      title: string;
      content: string;
      color: AXStyleColorType;
      location: AXLocation;
    }
  > = {
    'top-start': {
      title: 'Top Start',
      content: 'Notification positioned at top-start',
      color: 'primary',
      location: 'top-start',
    },
    'top-center': {
      title: 'Top Center',
      content: 'Notification positioned at top-center',
      color: 'success',
      location: 'top-center',
    },
    'top-end': {
      title: 'Top End',
      content: 'Notification positioned at top-end',
      color: 'warning',
      location: 'top-end',
    },
    'bottom-start': {
      title: 'Bottom Start',
      content: 'Notification positioned at bottom-start',
      color: 'danger',
      location: 'bottom-start',
    },
    'bottom-center': {
      title: 'Bottom Center',
      content: 'Notification positioned at bottom-center',
      color: 'secondary',
      location: 'bottom-center',
    },
    'bottom-end': {
      title: 'Bottom End',
      content: 'Notification positioned at bottom-end',
      color: 'default',
      location: 'bottom-end',
    },
  };

  protected showSelected(): void {
    const key = this.selectedLocation();
    if (key === 'all') {
      this.showMultipleLocations();
      return;
    }

    const preset = this.presets[key];
    this.notificationService.show({
      title: preset.title,
      content: preset.content,
      color: preset.color,
      location: preset.location,
    });
  }

  private showMultipleLocations(): void {
    setTimeout(() => {
      this.notificationService.show({
        title: 'Top Start',
        content: 'First notification',
        color: 'primary',
        location: 'top-start',
        timeOut: 3000,
      });
    }, 0);

    setTimeout(() => {
      this.notificationService.show({
        title: 'Top Center',
        content: 'Second notification',
        color: 'success',
        location: 'top-center',
        timeOut: 3000,
      });
    }, 500);

    setTimeout(() => {
      this.notificationService.show({
        title: 'Top End',
        content: 'Third notification',
        color: 'warning',
        location: 'top-end',
        timeOut: 3000,
      });
    }, 1000);

    setTimeout(() => {
      this.notificationService.show({
        title: 'Bottom Start',
        content: 'Fourth notification',
        color: 'danger',
        location: 'bottom-start',
        timeOut: 3000,
      });
    }, 1500);

    setTimeout(() => {
      this.notificationService.show({
        title: 'Bottom Center',
        content: 'Fifth notification',
        color: 'secondary',
        location: 'bottom-center',
        timeOut: 3000,
      });
    }, 2000);

    setTimeout(() => {
      this.notificationService.show({
        title: 'Bottom End',
        content: 'Sixth notification',
        color: 'default',
        location: 'bottom-end',
        timeOut: 3000,
      });
    }, 2500);
  }
}
