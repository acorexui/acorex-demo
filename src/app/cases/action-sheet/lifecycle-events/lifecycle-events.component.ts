import {
  AXActionSheetEvent,
  AXActionSheetModule,
  AXActionSheetService,
} from '@acorex/components/action-sheet';
import { AXButtonComponent } from '@acorex/components/button';
import { Component, OnDestroy, inject, signal } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lifecycle-events',
  imports: [AXButtonComponent],
  templateUrl: './lifecycle-events.component.html',
})
export class LifecycleEventsComponent implements OnDestroy {
  private actionSheet = inject(AXActionSheetService);
  private sub: Subscription;
  events = signal<AXActionSheetEvent[]>([]);

  constructor() {
    this.sub = this.actionSheet.actionSheetEvent$.subscribe((e) => {
      this.events.update((list) => [e, ...list].slice(0, 20));
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  async open(): Promise<void> {
    await this.actionSheet.open({
      title: 'Lifecycle Demo',
      items: [{ text: 'One' }, { text: 'Two' }, { text: 'Three' }],
      closeOnBackdropClick: true,
      draggable: true,
      dragUp: true,
    });
  }

  clear(): void {
    this.events.set([]);
  }
}
