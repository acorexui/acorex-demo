import { Component, signal } from '@angular/core';
import { AXDropdownButtonModule } from '@acorex/components/dropdown-button';
import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
  selector: 'demo-dropdown-button-disabled',
  standalone: true,
  imports: [AXButtonModule, AXDecoratorModule, AXDropdownButtonModule],
  templateUrl: './disabled.component.html',
})
export class DropdownButtonDisabledComponent {}
