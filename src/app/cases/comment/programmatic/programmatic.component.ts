import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { AXCommentModule } from '@acorex/components/comment';
import { AXAvatarModule } from '@acorex/components/avatar';
import { AXButtonModule } from '@acorex/components/button';

@Component({
  standalone: true,
  selector: 'app-comment-programmatic',
  imports: [AXCommentModule, AXAvatarModule, AXButtonModule],
  templateUrl: './programmatic.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProgrammaticComponent {
  @ViewChild('container') container?: any;
  @ViewChild('parentItem') parentItem?: any;

  toggleReplies(): void {
    this.parentItem?.toggleCollapse();
  }

  scrollToR2(): void {
    this.container?.scrollToReply('r2');
  }
}
