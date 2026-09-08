import { AXStyleLookType, AXValueChangedEvent } from '@acorex/cdk/common';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXFormModule } from '@acorex/components/form';
import {
  AXImageEditorContainerComponent,
  AXImageEditorCropComponent,
  AXImageEditorHistoryComponent,
  AXImageEditorPenComponent,
  AXImageEditorRotateComponent,
  AXImageEditorToolsBarComponent,
  AXImageEditorViewComponent,
} from '@acorex/components/image-editor';
import { AXToolBarModule } from '@acorex/components/toolbar';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: './custom-toolbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AXFormModule,
    AXToolBarModule,
    AXDecoratorModule,
    AXImageEditorContainerComponent,
    AXImageEditorViewComponent,
    AXImageEditorHistoryComponent,
    AXImageEditorToolsBarComponent,
    AXImageEditorPenComponent,
    AXImageEditorCropComponent,
    AXImageEditorRotateComponent,
  ],
})
export class customToolbarComponent {
  protected readonly options = signal<{
    look: AXStyleLookType;
  }>({
    look: 'solid',
  });

  protected readonly cropAspectRatios = signal([
    '2:1',
    '1:2',
    '16:9:active',
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
