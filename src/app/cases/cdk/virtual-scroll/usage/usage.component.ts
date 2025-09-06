import { AXVirtualScrollModule } from '@acorex/cdk/virtual-scroll';
import type { AXConversationMessage } from '@acorex/components/conversation';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXDecoratorModule, AXVirtualScrollModule],
})
export class UsageComponent {
  protected chat = signal<AXConversationMessage[]>([
    {
      id: '0',
      sendTime: new Date(),
      type: 'text',
      readTime: new Date(),
      content: 'Hello',
      name: 'John',
      showActionButton: true,
    },
    {
      id: '1',
      fromId: '10',
      sendTime: new Date(),
      readTime: new Date(),
      type: 'text',
      content: 'Hello John, How are you?',
      name: 'David',
      replyTo: {
        id: '0',
      },
    },
    {
      id: '3',
      sendTime: new Date(),
      readTime: new Date(),
      type: 'text',
      content: 'Can i have your address information?',
      name: 'David',
      replyTo: {
        id: '1',
      },
    },
    {
      id: '7',
      sendTime: new Date(),
      type: 'text',
      readTime: new Date(),
      content: 'Yes, I can give you my address information.',
      name: 'John',
    },
    {
      id: '8',
      sendTime: new Date(),
      readTime: new Date(),
      type: 'text',
      content: 'thanks',
      name: 'David',
    },
  ]);

  callForUpdate() {
    console.log('scroll reached end of list');
  }
}
