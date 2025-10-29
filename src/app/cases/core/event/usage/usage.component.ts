import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, signal } from '@angular/core';
import {
  AXEventService,
  AXEventData,
  AXSystemEvents,
} from '@acorex/core/events';
import { AXButtonComponent } from '@acorex/components/button';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  standalone: true,
  imports: [CommonModule, AXButtonComponent],
})
export class UsageComponent implements OnDestroy {
  private eventService = inject(AXEventService);
  private subscription?: Subscription;

  // Expose enum to template
  readonly AXSystemEvents = AXSystemEvents;

  // Observable-based event tracking
  eventLog = signal<string[]>([]);
  eventCount = signal(0);

  // Callback-based event tracking
  callbackLog = signal<string[]>([]);
  callbackCount = signal(0);

  constructor() {
    // Subscribe to Observable-based events
    this.subscription = this.eventService.onEvent.subscribe(
      (event: AXEventData) => {
        const timestamp = new Date().toLocaleTimeString();
        const logEntry = `[${timestamp}] Event: ${event.type}${
          event.payload ? ` - Payload: ${JSON.stringify(event.payload)}` : ''
        }`;
        this.eventLog.update((logs) => [...logs, logEntry]);
        this.eventCount.update((count) => count + 1);
      }
    );

    // Register callback-based event listeners
    this.eventService.on('custom-broadcast', (options?: any) => {
      const timestamp = new Date().toLocaleTimeString();
      const logEntry = `[${timestamp}] Broadcast received: ${
        options ? JSON.stringify(options) : 'no data'
      }`;
      this.callbackLog.update((logs) => [...logs, logEntry]);
      this.callbackCount.update((count) => count + 1);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.eventService.destroy('custom-broadcast', () => {});
  }

  // Observable-based event methods
  emitSystemEvent(eventType: AXSystemEvents) {
    this.eventService.emitEvent({
      type: eventType,
      payload: { timestamp: new Date().toISOString() },
    });
  }

  emitCustomObservableEvent() {
    this.eventService.emitEvent({
      type: 'CUSTOM_USER_EVENT',
      payload: { message: 'This is a custom event!', userId: 123 },
    });
  }

  emitEventWithPayload() {
    this.eventService.emitEvent({
      type: 'USER_ACTION',
      payload: {
        action: 'button-clicked',
        component: 'UsageComponent',
        metadata: { test: true },
      },
    });
  }

  // Callback-based event methods
  broadcastCallbackEvent() {
    this.eventService.broadcast('custom-broadcast', {
      message: 'Hello from broadcast!',
      count: this.callbackCount(),
    });
  }

  broadcastMultipleData() {
    this.eventService.broadcast('custom-broadcast', {
      type: 'multiple',
      data: [1, 2, 3, 4, 5],
      timestamp: new Date().toISOString(),
    });
  }

  // Utility methods
  clearObservableLogs() {
    this.eventLog.set([]);
    this.eventCount.set(0);
  }

  clearCallbackLogs() {
    this.callbackLog.set([]);
    this.callbackCount.set(0);
  }

  clearAllLogs() {
    this.clearObservableLogs();
    this.clearCallbackLogs();
  }
}
