import {
  AXFileViewerContainerComponent,
  type AXFileViewerItem,
} from '@acorex/components/file-viewer';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './usage.component.html',
  imports: [AXFileViewerContainerComponent],
})
export class UsageComponent {
  protected readonly files = signal<AXFileViewerItem[]>([
    {
      id: '1',
      name: 'Library',
      fileType: 'image',
      size: 128_000,
      url: 'https://picsum.photos/id/20/800/600',
      thumbnailUrl: 'https://picsum.photos/id/20/200/150',
    },
    {
      id: '3',
      name: 'Sample PDF',
      fileType: 'document',
      extension: 'pdf',
      mimeType: 'application/pdf',
      size: 512_000,
      url: 'https://www.buds.com.ua/images/Lorem_ipsum.pdf',
    },
    {
      id: '5',
      name: 'Coffee',
      fileType: 'image',
      size: 290_000,
      url: 'https://picsum.photos/id/30/800/600',
      thumbnailUrl: 'https://picsum.photos/id/30/200/150',
    },
    {
      id: '6',
      name: 'Rain',
      fileType: 'image',
      size: 300_000,
      url: 'https://picsum.photos/id/41/800/600',
      thumbnailUrl: 'https://picsum.photos/id/41/200/150',
    },
  ]);
}
