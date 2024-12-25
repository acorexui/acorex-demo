import { AXStyleLookType } from '@acorex/components/common';
import { AXFormModule } from '@acorex/components/form';
import { Component, signal } from '@angular/core';
import { AXPaintModule, AXPaintViewComponent } from '@acorex/components/paint';
import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { FormsModule } from '@angular/forms';
import { AXToolBarModule } from '@acorex/components/toolbar';
@Component({
  templateUrl: './usage.component.html',
  imports: [
    AXFormModule,
    AXPaintModule,
    AXButtonModule,
    AXDecoratorModule,
    FormsModule,
    AXToolBarModule,
  ],
})
export class UsageComponent {
  value = signal('');

  protected options = signal<{
    look: AXStyleLookType;
  }>({
    look: 'solid',
  });

  outputHandler(elem: AXPaintViewComponent) {
    elem.getOutPut('image/webp');
    console.log(this.value());
  }

  validateFn = (val: string) => {
    let isValid = true;

    if (!val) {
      isValid = false;
    }
    return {
      rule: 'callback',
      result: isValid,
      message: isValid ? '' : 'Please draw the content',
      value: val,
    };
  };
}
