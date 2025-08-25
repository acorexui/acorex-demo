import { AXColorBoxComponent } from '@acorex/components/color-box';
import { AXDecoratorClearButtonComponent } from '@acorex/components/decorators';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'clear-behavior.component.html',
  imports: [AXColorBoxComponent, AXDecoratorClearButtonComponent, FormsModule],
})
export class ClearBehaviorComponent {
  color: string | null = '#3b82f6';
}


