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
  standalone: true,
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
      type: 'image',
      url: 'https://picsum.photos/200/300',
      thumbnail: 'https://picsum.photos/200/300',
    },
    {
      id: '2',
      type: 'audio',
      url: 'https://actions.google.com/sounds/v1/ambiences/kids_playing.ogg',
      thumbnail: 'https://i.postimg.cc/hGy0ywYy/pngegg.png',
    },
    {
      id: '3',
      type: 'pdf',
      url: 'https://service.esfceo.ir/file_manager/isf/pdf/omore%20aza/aza%20jadid/%D8%B1%D8%A7%D9%87%D9%86%D9%85%D8%A7%DB%8C%20%D9%85%D8%B1%D8%A7%D8%AD%D9%84%20%D8%AA%D9%85%D8%AF%DB%8C%D8%AF%20%D9%BE%D8%B1%D9%88%D8%A7%D9%86%D9%87.pdf',
      thumbnail: 'https://i.postimg.cc/RVJhhprM/pngwing-com.png',
    },
    {
      id: '4',
      type: 'video',
      url: 'https://www.pexels.com/download/video/5495322/?fps=29.97&h=540&w=960',
      thumbnail: 'https://i.postimg.cc/N0k5YK3m/5617.jpg',
    },
    {
      id: '5',
      type: 'image',
      url: 'https://picsum.photos/200/300',
      thumbnail: 'https://picsum.photos/200/300',
    },
    {
      id: '6',
      type: 'audio',
      url: 'https://actions.google.com/sounds/v1/ambiences/kids_playing.ogg',
      thumbnail: 'https://i.postimg.cc/hGy0ywYy/pngegg.png',
    },
    {
      id: '7',
      type: 'pdf',
      url: 'https://service.esfceo.ir/file_manager/isf/pdf/omore%20aza/aza%20jadid/%D8%B1%D8%A7%D9%87%D9%86%D9%85%D8%A7%DB%8C%20%D9%85%D8%B1%D8%A7%D8%AD%D9%84%20%D8%AA%D9%85%D8%AF%DB%8C%D8%AF%20%D9%BE%D8%B1%D9%88%D8%A7%D9%86%D9%87.pdf',
      thumbnail: 'https://i.postimg.cc/RVJhhprM/pngwing-com.png',
    },
    {
      id: '8',
      type: 'video',
      url: 'https://www.pexels.com/download/video/5495322/?fps=29.97&h=540&w=960',
      thumbnail: 'https://i.postimg.cc/N0k5YK3m/5617.jpg',
    },
  ]);
}
