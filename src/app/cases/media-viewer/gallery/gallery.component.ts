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
  templateUrl: './gallery.component.html',
  imports: [
    AXDecoratorModule,
    AXButtonModule,
    AXFormModule,
    FormsModule,
    AXMediaViewerModule,
  ],
})
export class GalleryComponent {
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
      name: 'Coffee',
      type: 'image',
      size: '290kb',
      url: 'https://picsum.photos/id/30/500/500',
      thumbnailUrl: 'https://picsum.photos/id/30/500/500',
    },
    {
      id: '3',
      name: 'Rain',
      type: 'image',
      size: '300kb',
      url: 'https://picsum.photos/id/41/500/500',
      thumbnailUrl: 'https://picsum.photos/id/41/500/500',
    },
  ]);
}
