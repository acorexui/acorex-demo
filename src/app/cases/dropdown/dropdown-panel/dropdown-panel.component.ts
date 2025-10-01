import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXDropdownPanelComponent } from '@acorex/components/dropdown';
import { Component } from '@angular/core';

@Component({
  templateUrl: './dropdown-panel.component.html',
  imports: [AXButtonModule, AXDecoratorModule, AXDropdownPanelComponent],
})
export class DropdownPanelComponent {}
