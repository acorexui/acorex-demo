import {
  AXActionSheetItem,
  AXActionSheetModule,
  AXActionSheetService,
} from '@acorex/components/action-sheet';
import { AXButtonComponent } from '@acorex/components/button';
import { JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-usage',
  imports: [JsonPipe, AXActionSheetModule, AXButtonComponent],
  templateUrl: './usage.component.html',
})
export class UsageComponent {
  private actionSheet = inject(AXActionSheetService);
  lastResult = signal<unknown>(null);

  async open(): Promise<void> {
    const items: AXActionSheetItem[] = [
      { text: 'Edit', icon: 'fa-regular fa-edit', color: 'primary' },
      { text: 'Share', icon: 'fa-regular fa-share' },
      { text: 'Delete', icon: 'fa-regular fa-trash', color: 'danger' },
    ];
    const ref = await this.actionSheet.open({
      title: 'Choose an action',
      items,
      closeOnBackdropClick: true,
    });
    ref.closed.subscribe((res) => this.lastResult.set(res?.data ?? null));
  }
}
