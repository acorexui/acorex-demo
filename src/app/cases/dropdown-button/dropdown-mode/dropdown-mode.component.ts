import { Component, signal } from '@angular/core';
import { AXDropdownButtonModule } from '@acorex/components/dropdown-button';
import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
  selector: 'demo-dropdown-button-dropdown-mode',
  standalone: true,
  imports: [AXButtonModule, AXDecoratorModule, AXDropdownButtonModule],
  templateUrl: './dropdown-mode.component.html',
})
export class DropdownButtonDropdownModeComponent {}
