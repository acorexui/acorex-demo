import { Component, inject, signal } from '@angular/core';
import { AXCommentModule, AXCommentService } from '@acorex/components/comment';
import { AXAvatarModule } from '@acorex/components/avatar';
import { AXImageModule } from '@acorex/components/image';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXDataSource } from '@acorex/components/common';

@Component({
  templateUrl: './comment-input-type.component.html',
  standalone: true,
  imports: [AXCommentModule, AXAvatarModule, AXImageModule, AXDecoratorModule],
})
export class CommentInputTypeComponent {
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
}
