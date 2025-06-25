import { AXClickEvent } from '@acorex/cdk/common';
import {
  AXConversationActionEvent,
  AXConversationMessage,
  AXConversationModule,
} from '@acorex/components/conversation';
import { AXFileService } from '@acorex/core/file';
import { Component, inject, signal } from '@angular/core';
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

  protected options = signal({
    disabled: false,
    readonly: false,
    value: '',
  });

  chat = signal<AXConversationMessage[]>([
    {
      id: '0',
      sendTime: new Date(),
      type: 'text',
      readTime: new Date(),
      content: 'Hello John, How are you?',
      name: 'test name',
    },
  ]);

  handleOnSend(e: AXClickEvent) {
    console.log('send', e);

    // this.chats.push();
    if (e.data.value) {
      this.options.update((prev) => ({ ...prev, value: '' }));
      this.chat.update((values: any) => {
        return [
          ...values,
          {
            id: `${Math.random() * 10000}`,
            content: e.data.value,
            sendTime: new Date(),
            type: e.data.type,
            replyTo: { id: e.data.replyChat.id },
            readTime: new Date(),
          },
        ];
      });
    }
  }

  handleOnAction(e: AXConversationActionEvent) {
    console.log(e);
  }
}
