import { AXStyleLookType } from '@acorex/cdk/common';
import { AXFormModule } from '@acorex/components/form';
import { Component, inject, PLATFORM_ID, signal, DOCUMENT } from '@angular/core';
import { AXPaintModule, AXPaintViewComponent } from '@acorex/components/paint';
import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { FormsModule } from '@angular/forms';
import { AXToolBarModule } from '@acorex/components/toolbar';
import { isPlatformBrowser } from '@angular/common';
@Component({
  templateUrl: './signature-box.component.html',
  imports: [
    AXFormModule,
    AXPaintModule,
    AXButtonModule,
    AXDecoratorModule,
    AXToolBarModule,
    FormsModule,
  ],
})
export class SignatureBoxComponent {
  value = signal('');
  private document = inject(DOCUMENT);
  private platformID = inject(PLATFORM_ID);

  protected options = signal<{
    look: AXStyleLookType;
    disabled: boolean;
  }>({
    look: 'solid',
    disabled: false,
  });

  downloadHandler(elem: AXPaintViewComponent) {
    elem.getOutPut('image/webp');
    if (this.value() && isPlatformBrowser(this.platformID)) {
      const a = this.document.createElement('a');
      a.href = this.value();
      a.download = 'AXPaint';
      a.click();
    }
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
