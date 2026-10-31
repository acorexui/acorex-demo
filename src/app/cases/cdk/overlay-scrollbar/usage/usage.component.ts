import { AXOverlayScrollbarDirective } from '@acorex/cdk/overlay-scrollbar';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXOverlayScrollbarDirective],
  styles: `
    .demo-overlay-scrollbar-panel {
      --ax-comp-overlay-scrollbar-size: 10px;
      --ax-comp-overlay-scrollbar-thumb-radius: 999px;
      --ax-comp-overlay-scrollbar-track-radius: 6px;
      --ax-comp-overlay-scrollbar-thumb-color: rgba(
        var(--ax-sys-color-primary),
        0.75
      );
      --ax-comp-overlay-scrollbar-thumb-hover-color: rgba(
        var(--ax-sys-color-primary),
        0.95
      );
      --ax-comp-overlay-scrollbar-thumb-active-color: rgba(
        var(--ax-sys-color-primary),
        1
      );
      --ax-comp-overlay-scrollbar-track-color: rgba(
        var(--ax-sys-color-surface),
        0.65
      );
      --ax-comp-overlay-scrollbar-track-active-color: rgba(
        var(--ax-sys-color-light-surface),
        0.9
      );
      --ax-comp-overlay-scrollbar-fade-duration: 0.25s;
    }
  `,
})
export class UsageComponent {
  protected readonly lines = Array.from(
    { length: 24 },
    (_, index) => `Scrollable row ${index + 1}`,
  );
}
