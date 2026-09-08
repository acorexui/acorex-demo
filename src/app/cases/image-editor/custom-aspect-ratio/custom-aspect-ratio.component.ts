import { AXStyleLookType, AXValueChangedEvent } from '@acorex/cdk/common';
import { AXFormModule } from '@acorex/components/form';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXToolBarModule } from '@acorex/components/toolbar';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AXImageEditorModule } from '@acorex/components/image-editor';
@Component({
  templateUrl: './custom-aspect-ratio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AXFormModule,
    AXToolBarModule,
    AXDecoratorModule,
    AXImageEditorModule
  ],
})
export class customAspectraioComponent {
  protected readonly options = signal<{
    look: AXStyleLookType;
  }>({
    look: 'solid',
  });

  protected readonly cropAspectRatios = signal([
    '4:3',
    '3:4',
    '34:8',
    '8:34:active',
  ]);

  protected saveHandler(e: AXValueChangedEvent<Blob[]>): void {
    console.log(e.value);
  }

  protected validateFn = (val: string) => {
    const isValid = !!val;

    return {
      rule: 'callback',
      result: isValid,
      message: isValid ? '' : 'Please draw the content',
      value: val,
    };
  };
}
