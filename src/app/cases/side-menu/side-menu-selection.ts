import type { AXSideMenuItemClickEvent } from '@acorex/components/side-menu';
import { signal } from '@angular/core';

/** Demo helper: `[active]` + `(onClick)` for ax-side-menu-item. */
export function createSideMenuSelection<T extends string>(initial: T) {
  const selectedId = signal(initial);

  function isActive(id: T): boolean {
    return selectedId() === id;
  }

  function select(id: T, event?: AXSideMenuItemClickEvent): void {
    selectedId.set(id);
    if (event) {
      event.handled = false;
    }
  }

  return { selectedId, isActive, select };
}
