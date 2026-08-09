import { AXButtonComponent } from '@acorex/components/button';
import { AXDateTimeBoxComponent } from '@acorex/components/datetime-box';
import {
  AXDecoratorClearButtonComponent,
  AXDecoratorGenericComponent,
} from '@acorex/components/decorators';
import { AXFormFieldComponent } from '@acorex/components/form';
import { AXLabelComponent } from '@acorex/components/label';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'allow-typing.component.html',
  imports: [
    FormsModule,
    AXLabelComponent,
    AXButtonComponent,
    AXFormFieldComponent,
    AXDateTimeBoxComponent,
    AXDecoratorGenericComponent,
    AXDecoratorClearButtonComponent,
  ],
})
export class AllowTypingComponent {
  protected allowTyping = signal(true);
  protected value = signal<Date | null>(new Date());

  protected toggleAllowTyping() {
    this.allowTyping.update((v) => !v);
  }
}
