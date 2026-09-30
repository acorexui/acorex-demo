import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXDropdownButtonModule } from '@acorex/components/dropdown-button';
import { Component } from '@angular/core';

@Component({
  selector: 'demo-dropdown-button-multi-level',
  standalone: true,
  imports: [AXButtonModule, AXDecoratorModule, AXDropdownButtonModule],
  templateUrl: './multi-level.component.html',
})
export class DropdownButtonMultiLevelComponent {}
