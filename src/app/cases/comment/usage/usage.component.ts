import { Component, inject, signal } from '@angular/core';
import { AXCommentModule, AXCommentService } from '@acorex/components/comment';
import { AXAvatarModule } from '@acorex/components/avatar';
import { AXImageModule } from '@acorex/components/image';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXWysiwygModule } from '@acorex/components/wysiwyg';
import { AXButtonModule } from '@acorex/components/button';

@Component({
  templateUrl: './usage.component.html',
  standalone: true,
  imports: [
    AXCommentModule,
    AXAvatarModule,
    AXImageModule,
    AXDecoratorModule,
    AXWysiwygModule,
    AXButtonModule,
  ],
})
export class UsageComponent {
  commentService = inject(AXCommentService);

  protected options = signal<{
    color: string;
    look: 'sharp' | 'soft' | 'rounded';
    type: string;
  }>({
    color: 'primary',
    look: 'rounded',
    type: 'solid', // 'image' | 'text' | 'icon' | 'default'
  });

  valueHandler(e: any) {
    console.log(e.data.value);
  }

  getHTML(e: any) {
    console.log(e.data.value);
  }

  replyHandler() {
    console.log('click');
  }
}
