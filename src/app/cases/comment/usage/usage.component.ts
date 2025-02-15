import { Component, signal } from '@angular/core';
import { AXCommentModule } from '@acorex/components/comment';
import { AXAvatarModule } from '@acorex/components/avatar';
import { AXImageModule } from '@acorex/components/image';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXWysiwygModule } from '@acorex/components/wysiwyg';
import { AXButtonModule } from '@acorex/components/button';
import { AXStyleLookType, AXDataSource } from '@acorex/components/common';
import { AXFormModule } from '@acorex/components/form';
import { FormsModule } from '@angular/forms';
import { AXDropdownModule } from '@acorex/components/dropdown';
import { AXToolBarModule } from '@acorex/components/toolbar';
@Component({
  templateUrl: './usage.component.html',
  imports: [
    AXCommentModule,
    AXAvatarModule,
    AXImageModule,
    AXDecoratorModule,
    AXWysiwygModule,
    AXButtonModule,
    AXFormModule,
    FormsModule,
    AXDropdownModule,
    AXToolBarModule,
  ],
})
export class UsageComponent {
  value = signal('');

  protected wysiwygOptions = signal<{
    look: AXStyleLookType;
  }>({
    look: 'solid',
  });

  protected avatarOptions = signal<{
    color: string;
    look: 'solid' | 'twotone';
    type: string;
  }>({
    color: 'primary',
    look: 'solid',
    type: 'solid', // 'image' | 'text' | 'icon' | 'default'
  });

  protected editorOption = new AXDataSource<string>({
    pageSize: 10,
    key: 'id',
    load: () => {
      return new Promise((resolve) => {
        resolve({
          items: ['advance', 'basic'],
          total: 2,
        });
      });
    },
    byKey: () => {
      return new Promise((resolve) => {
        resolve('advance');
      });
    },
  });

  replyHandler() {
    console.log('click');
  }

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
