import {
  AXCarouselDirective,
  type AXCarouselOptions,
} from '@acorex/cdk/carousel';
import {
  afterNextRender,
  Component,
  signal,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXCarouselDirective],
  encapsulation: ViewEncapsulation.None,
  styles: `
    @reference '@acorex/styles/themes/default.css';
    @import 'swiper/swiper-bundle.css';

    .carousel.swiper {
      position: relative;
      overflow: hidden;
      display: block;
      width: 100%;
      max-width: 18rem;
      height: 12rem;
      --swiper-navigation-color: rgba(var(--ax-sys-color-primary-surface), 1);
      --swiper-pagination-color: rgba(var(--ax-sys-color-primary-surface), 1);
    }

    .carousel .ax-carousel-slide img {
      display: block;
      height: 12rem;
      width: 100%;
      object-fit: cover;
    }

    .carousel .swiper-button-prev,
    .carousel .swiper-button-next {
      --swiper-navigation-size: 1.75rem;
    }
  `,
})
export class UsageComponent {
  private readonly carousel = viewChild.required(AXCarouselDirective);

  private readonly carouselOptions: AXCarouselOptions = {
    slidesPerView: 1,
    spaceBetween: 12,
    keyboard: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.carousel .ax-carousel-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.carousel .ax-carousel-button-next',
      prevEl: '.carousel .ax-carousel-button-prev',
    },
    loop: true,
  };

  #init = afterNextRender(() => {
    void this.carousel().init(this.carouselOptions);
  });

  protected data = signal([
    {
      id: '1',
      name: 'Library',
      url: 'https://picsum.photos/id/20/360/240',
    },
    {
      id: '5',
      name: 'Coffee',
      url: 'https://picsum.photos/id/30/360/240',
    },
    {
      id: '6',
      name: 'Rain',
      url: 'https://picsum.photos/id/41/360/240',
    },
  ]);
}
