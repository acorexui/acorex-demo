import { AXClickEvent } from '@acorex/cdk/common';
import {
  AXConversationActionEvent,
  AXConversationModule,
  AXConversationService,
} from '@acorex/components/conversation';
import { AXFileService } from '@acorex/core/file';
import { afterNextRender, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './custom.component.html',
  imports: [AXConversationModule, FormsModule],
  styles: `
  .ax-demo-conversation-container{
    min-width:50rem
  }`,
})
export class CustomComponent {
  fileService: AXFileService = inject(AXFileService);
  conversationService = inject(AXConversationService);

  protected options = signal({
    disabled: false,
    readonly: false,
    value: '',
  });

  constructor() {
    afterNextRender(() => {
      this.conversationService.chats.set([
        {
          id: '0',
          sendTime: new Date(),
          type: 'custom',
          readTime: new Date(),
        },
      ]);
    });
  }

  handleOnSend(e: AXClickEvent) {
    console.log('send', e);

    // this.chats.push();
    if (e.data.value) {
      this.options.update((prev) => ({ ...prev, value: '' }));
      this.conversationService.chats.update((values: any) => {
        return [
          ...values,
          {
            id: `${Math.floor(Math.random() * 100)}`,
            content: e.data.value,
            sendTime: new Date(),
            type: e.data.type,
            replyTo: e.data.replyChat,
            fromId: '10',
          },
        ];
      });
    }
  }

  handleOnAction(e: AXConversationActionEvent) {
    console.log(e);
  }
}
