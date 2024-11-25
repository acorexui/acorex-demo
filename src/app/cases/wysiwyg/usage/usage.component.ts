import { AXButtonModule } from '@acorex/components/button';
import { AXStyleLookType } from '@acorex/components/common';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXFormModule } from '@acorex/components/form';
import { AXWysiwygModule } from '@acorex/components/wysiwyg';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    templateUrl: './usage.component.html',
    imports: [
        AXWysiwygModule,
        AXDecoratorModule,
        AXButtonModule,
        AXFormModule,
        FormsModule,
    ]
})
export class UsageComponent {
  value = signal('');

  protected options = signal<{
    look: AXStyleLookType;
  }>({
    look: 'solid',
  });

  valueChange(e: any) {
    console.log(e);
  }

  validateFn = (val: string) => {
    let isValid = true;

    if (!val || val === '<p><br></p>') {
      isValid = false;
    }
    return {
      rule: 'callback',
      result: isValid,
      message: isValid ? '' : 'Please fill the content',
      value: val,
    };
  };
}
