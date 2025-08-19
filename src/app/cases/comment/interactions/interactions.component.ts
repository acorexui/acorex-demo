import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { AXCommentModule } from '@acorex/components/comment';
import { AXAvatarModule } from '@acorex/components/avatar';

@Component({
  standalone: true,
  selector: 'app-comment-interactions',
  imports: [AXCommentModule, AXAvatarModule],
  templateUrl: './interactions.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InteractionsComponent {
  liked1 = signal(false);
  liked2 = signal(true);
  lastLiked?: boolean;
}


