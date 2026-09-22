import { AXVirtualScrollModule } from '@acorex/cdk/virtual-scroll';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXDecoratorModule, AXVirtualScrollModule],
})
export class UsageComponent {
  protected chat = signal([
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
      type: 'text',
      readTime: new Date(),
      content: 'Yes, I can give you my address information.',
      name: 'John',
    },
    {
      id: '9',
      sendTime: new Date(),
      type: 'text',
      readTime: new Date(),
      content: 'Yes, I can give you my address information.',
      name: 'John',
    },
    {
      id: '10',
      sendTime: new Date(),
      readTime: new Date(),
      type: 'text',
      content: 'thanks',
      name: 'David',
    },
    {
      id: '11',
      sendTime: new Date(),
      readTime: new Date(),
      type: 'text',
      content: 'No problem, happy to help.',
      name: 'John',
    },
    {
      id: '12',
      sendTime: new Date(),
      readTime: new Date(),
      type: 'text',
      content: 'I sent the documents to your email.',
      name: 'David',
      replyTo: {
        id: '10',
      },
    },
    {
      id: '13',
      sendTime: new Date(),
      readTime: new Date(),
      type: 'text',
      content: 'Got them, I will review tonight.',
      name: 'John',
    },
    {
      id: '14',
      sendTime: new Date(),
      readTime: new Date(),
      type: 'text',
      content: 'Let me know if anything is missing.',
      name: 'David',
    },
    {
      id: '15',
      sendTime: new Date(),
      readTime: new Date(),
      type: 'text',
      content: 'Will do. Talk tomorrow.',
      name: 'John',
    },
    {
      id: '16',
      sendTime: new Date(),
      readTime: new Date(),
      type: 'text',
      content: 'Sounds good.',
      name: 'David',
    },
    {
      id: '17',
      sendTime: new Date(),
      readTime: new Date(),
      type: 'text',
      content: 'See you then.',
      name: 'John',
    },
  ]);

  callForUpdate() {
    console.log('scroll reached end of list');
  }
}
