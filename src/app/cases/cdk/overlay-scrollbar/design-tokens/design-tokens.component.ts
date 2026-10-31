import { AXOverlayScrollbarDirective } from '@acorex/cdk/overlay-scrollbar';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'design-tokens.component.html',
  imports: [AXOverlayScrollbarDirective],
  styles: `
    .overlay-scrollbar-tokens-default {
      --ax-comp-overlay-scrollbar-size: 6px;
      --ax-comp-overlay-scrollbar-thumb-radius: 4px;
      --ax-comp-overlay-scrollbar-track-radius: 4px;
      --ax-comp-overlay-scrollbar-track-color: transparent;
      --ax-comp-overlay-scrollbar-thumb-color: var(
        --ax-sys-scroller-thumb-color,
        #64748b
      );
      --ax-comp-overlay-scrollbar-thumb-border-width: 0;
      --ax-comp-overlay-scrollbar-track-border-width: 0;
      --ax-comp-overlay-scrollbar-fade-duration: 0.35s;
    }

    .overlay-scrollbar-tokens-custom {
      --ax-comp-overlay-scrollbar-size: 14px;
      --ax-comp-overlay-scrollbar-thumb-radius: 6px;
      --ax-comp-overlay-scrollbar-track-radius: 8px;
      --ax-comp-overlay-scrollbar-track-color: rgba(
        var(--ax-sys-color-warning),
        0.15
      );
      --ax-comp-overlay-scrollbar-track-active-color: rgba(
        var(--ax-sys-color-warning),
        0.28
      );
      --ax-comp-overlay-scrollbar-thumb-color: rgba(
        var(--ax-sys-color-warning),
        0.85
      );
      --ax-comp-overlay-scrollbar-thumb-hover-color: rgba(
        var(--ax-sys-color-warning),
        1
      );
      --ax-comp-overlay-scrollbar-thumb-active-color: rgb(
        var(--ax-sys-color-warning)
      );
      --ax-comp-overlay-scrollbar-thumb-border-width: 2px;
      --ax-comp-overlay-scrollbar-thumb-border-color: rgba(
        var(--ax-sys-color-lightest-surface),
        0.9
      );
      --ax-comp-overlay-scrollbar-track-border-width: 1px;
      --ax-comp-overlay-scrollbar-track-border-color: rgba(
        var(--ax-sys-color-warning),
        0.35
      );
      --ax-comp-overlay-scrollbar-fade-duration: 0.2s;
    }
  `,
})
export class DesignTokensComponent {
  protected readonly lines = Array.from(
    { length: 20 },
    (_, index) => `Item ${index + 1}`,
  );
}
