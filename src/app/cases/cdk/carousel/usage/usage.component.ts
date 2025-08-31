import {
  AXCarouselDirective,
  type AXCarouselOptions,
} from '@acorex/cdk/carousel';
import { Component, signal, viewChild, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXCarouselDirective],
  encapsulation: ViewEncapsulation.None,
  styles: `
  @use "swiper/swiper-bundle.css" as *;
  .ax-carousel {
    overflow: hidden;
    display: block;
    width : 40rem;
    height: 40rem;
  }
  `,
})
export class UsageComponent {
  private swiperRef = viewChild<AXCarouselDirective>('f');

  carouselOptions = signal<AXCarouselOptions>({
    slidesPerView: 1,
    keyboard: true,
    pagination: {
      el: '.ax-carousel-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.ax-carousel-button-next',
      prevEl: '.ax-carousel-button-prev',
    },
    loop: true,
  });

  protected data = signal([
    {
      id: '1',
      name: 'Library',
      type: 'image',
      size: '128kb',
      url: 'https://picsum.photos/id/20/500/500',
      thumbnail: 'https://picsum.photos/id/20/500/500',
    },
    {
      id: '5',
      name: 'Coffee',
      type: 'image',
      size: '290kb',
      url: 'https://picsum.photos/id/30/500/500',
      thumbnail: 'https://picsum.photos/id/30/500/500',
    },
    {
      id: '6',
      name: 'Rain',
      type: 'image',
      size: '300kb',
      url: 'https://picsum.photos/id/41/500/500',
      thumbnail: 'https://picsum.photos/id/41/500/500',
    },
  ]);
}
