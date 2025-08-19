import { Component, signal } from '@angular/core';
import {
  AXConversationMessage,
  AXConversationModule,
} from '@acorex/components/conversation';
import { AXAvatarModule } from '@acorex/components/avatar';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
  selector: 'app-infinite-scroll',
  standalone: true,
  imports: [AXConversationModule, AXAvatarModule, AXDecoratorModule],
  templateUrl: './infinite-scroll.component.html',
})
export class InfiniteScrollComponent {
  private nextId = 3000;
  private page = 0;

  chat = signal<AXConversationMessage[]>([
    {
      id: '301',
      type: 'text',
      sendTime: new Date(),
      content: 'Most recent message.',
      name: 'You',
    },
    {
      id: '302',
      type: 'text',
      sendTime: new Date(),
      content: 'Scroll up to load older items.',
      fromId: 'agent-1',
      name: 'Support',
    },
    {
      id: '303',
      type: 'text',
      sendTime: new Date(),
      content: 'Scroll up to load older items.',
      fromId: 'agent-1',
      name: 'Support',
    },
    {
      id: '304',
      type: 'text',
      sendTime: new Date(),
      content: 'Scroll up to load older items.',
      fromId: 'agent-1',
      name: 'Support',
    },
    {
      id: '305',
      type: 'text',
      sendTime: new Date(),
      content: 'Scroll up to load older items.',
      fromId: 'agent-1',
      name: 'Support',
    },
  ]);

  handleSend(event: any) {
    if (!event?.data || event.data.type !== 'text') return;
    const message: AXConversationMessage = {
      id: String(this.nextId++),
      type: 'text',
      sendTime: new Date(),
      content: String(event.data.value ?? ''),
      name: 'You',
    };
    this.chat.update((prev) => [...prev, message]);
  }

  loadOlder() {
    const base = this.page++ * 3;
    const older: AXConversationMessage[] = [
      {
        id: String(310 + base),
        type: 'text',
        sendTime: new Date(),
        content: `Older message #${base + 1}`,
        fromId: 'agent-1',
        name: 'Support',
      },
      {
        id: String(311 + base),
        type: 'text',
        sendTime: new Date(),
        content: `Older message #${base + 2}`,
        name: 'You',
      },
      {
        id: String(312 + base),
        type: 'text',
        sendTime: new Date(),
        content: `Older message #${base + 3}`,
        fromId: 'agent-1',
        name: 'Support',
      },
    ];
    this.chat.update((prev) => [...older, ...prev]);
  }
}
