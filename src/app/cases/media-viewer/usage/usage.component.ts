import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXFormModule } from '@acorex/components/form';
import {
  AXMediaViewerData,
  AXMediaViewerModule,
} from '@acorex/components/media-viewer';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './usage.component.html',
  imports: [
    AXDecoratorModule,
    AXButtonModule,
    AXFormModule,
    FormsModule,
    AXMediaViewerModule,
  ],
})
export class UsageComponent {
  protected data = signal<AXMediaViewerData[]>([
    {
      id: '1',
      name: 'Library',
      type: 'image',
      size: '128kb',
      url: 'https://picsum.photos/id/20/500/500',
      thumbnailUrl: 'https://picsum.photos/id/20/500/500',
    },
    {
      id: '2',
      name: 'Audio',
      type: 'audio',
      size: '256kb',
      url: 'https://actions.google.com/sounds/v1/ambiences/kids_playing.ogg',
    },
    {
      id: '3',
      name: 'Test pdf',
      type: 'pdf',
      size: '512kb',
      url: 'https://www.buds.com.ua/images/Lorem_ipsum.pdf',
    },
    {
      id: '4',
      name: 'Animation',
      type: 'video',
      size: '1024kb',
      url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      thumbnailUrl: 'https://i.postimg.cc/N0k5YK3m/5617.jpg',
    },
    {
      id: '5',
      name: 'Coffee',
      type: 'image',
      size: '290kb',
      url: 'https://picsum.photos/id/30/500/500',
      thumbnailUrl: 'https://picsum.photos/id/30/500/500',
    },
    {
      id: '6',
      name: 'Rain',
      type: 'image',
      size: '300kb',
      url: 'https://picsum.photos/id/41/500/500',
      thumbnailUrl: 'https://picsum.photos/id/41/500/500',
    },
  ]);
}
