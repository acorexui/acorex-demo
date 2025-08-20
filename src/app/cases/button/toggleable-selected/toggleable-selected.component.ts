import { AXButtonComponent } from '@acorex/components/button';
import { Component } from '@angular/core';

@Component({
  templateUrl: './toggleable-selected.component.html',
  imports: [AXButtonComponent],
})
export class ToggleableSelectedComponent {
  onSelectedChange(name: string, value: boolean) {
    console.log(`${name} selected:`, value);
  }
}
