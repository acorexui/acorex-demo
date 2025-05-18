import { Component, signal } from '@angular/core';
import { AXImageEditorModule } from '@acorex/components/image-editor';
import { AXStyleLookType, AXValueChangedEvent } from '@acorex/cdk/common';
import { AXFormModule } from '@acorex/components/form';
import { AXToolBarModule } from '@acorex/components/toolbar';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXButtonModule } from '@acorex/components/button';

@Component({
  templateUrl: './usage.component.html',
  imports: [
    AXImageEditorModule,
    AXFormModule,
    AXToolBarModule,
    AXDecoratorModule,
    AXButtonModule,
  ],
})
export class UsageComponent {
  protected options = signal<{
    look: AXStyleLookType;
  }>({
    look: 'solid',
  });

  saveHandler(e: AXValueChangedEvent<unknown>) {
    console.log(e.value);
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
