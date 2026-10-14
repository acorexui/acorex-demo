import {
  AXButtonComponent,
  AXButtonItemComponent,
  AXButtonItemListComponent,
} from '@acorex/components/button';
import { AXDropdownBoxComponent } from '@acorex/components/dropdown';
import { Component, signal, viewChild } from '@angular/core';

interface StatusOption {
  id: string;
  label: string;
}

@Component({
  templateUrl: 'dropdown-box.component.html',
  styles: [
    `
      :host ::ng-deep ax-dropdown-box.ax-editor-container {
        align-items: center;
        padding-block: 0;
      }

      :host ::ng-deep ax-dropdown-box .ax-chips-container {
        min-height: var(--ax-sys-size-base);
      }
    `,
  ],
  imports: [
    AXDropdownBoxComponent,
    AXButtonComponent,
    AXButtonItemListComponent,
    AXButtonItemComponent,
  ],
})
export class DropdownBoxComponent {
  private readonly dropdown = viewChild(AXDropdownBoxComponent);

  protected readonly panelOpen = signal(false);

  protected readonly options: StatusOption[] = [
    { id: 'draft', label: 'Draft' },
    { id: 'review', label: 'In review' },
    { id: 'published', label: 'Published' },
    { id: 'archived', label: 'Archived' },
  ];

  protected readonly selected = signal<StatusOption | null>(null);

  protected openPanel(): void {
    this.dropdown()?.open();
  }

  protected closePanel(): void {
    this.dropdown()?.close();
  }

  protected onPanelOpened(): void {
    this.panelOpen.set(true);
  }

  protected onPanelClosed(): void {
    this.panelOpen.set(false);
  }

  protected selectOption(option: StatusOption): void {
    this.selected.set(option);
    this.closePanel();
  }
}
