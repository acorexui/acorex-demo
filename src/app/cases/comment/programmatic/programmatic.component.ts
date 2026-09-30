import {
  AXCommentContainerComponent,
  AXCommentItemComponent,
  AXCommentModule,
} from '@acorex/components/comment';
import { AXAvatarModule } from '@acorex/components/avatar';
import { AXButtonModule } from '@acorex/components/button';
import { Component, viewChild } from '@angular/core';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';

@Component({
  selector: 'app-comment-programmatic',
  templateUrl: './programmatic.component.html',
  imports: [AXCommentModule, AXAvatarModule, AXButtonModule, AXDecoratorGenericComponent],
})
export class ProgrammaticComponent {
  private readonly container = viewChild<AXCommentContainerComponent>(
    'container',
  );
  private readonly parentItem = viewChild<AXCommentItemComponent>('parentItem');

  toggleReplies(): void {
    this.parentItem()?.toggleReplies();
  }

  scrollToR2(): void {
    const parent = this.parentItem();
    parent?.showReplies();
    this.container()?.scrollToReply('r2');
  }
}
