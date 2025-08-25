import { AXButtonComponent } from '@acorex/components/button';
import { AXColorBoxComponent } from '@acorex/components/color-box';
import {
  AXDecoratorClearButtonComponent,
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'using-decorators.component.html',
  imports: [
    FormsModule,
    AXButtonComponent,
    AXColorBoxComponent,
    AXDecoratorGenericComponent,
    AXDecoratorClearButtonComponent,
    AXDecoratorIconComponent,
  ],
})
export class UsingDecoratorsComponent {
  color = signal<string | null>('#3b82f6');
  value = signal<string | null>(null);

  protected reset() {
    this.color.set(null);
    this.value.set(null);
  }
}
