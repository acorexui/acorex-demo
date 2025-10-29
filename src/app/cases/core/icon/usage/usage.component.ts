import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import {
  AXIconResolver,
  AXIconResolverService,
  AX_ICON_RESOLVER,
} from '@acorex/core/icon';

// Custom icon resolver that maps icon names to SVG strings
class DemoIconResolver extends AXIconResolver {
  private iconMap: Record<string, string> = {
    heart:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 186.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21l-13.7 81.2L301.2 377.8c-2.4-2.2-3.6-5.3-3.6-8.5V392c0-13.3 10.7-24 24-24s24 10.7 24 24v5.7c0 3.2-1.2 6.3-3.6 8.5l-126.2 27.2 13.7-81.2c1.3-7.7-1.3-15.5-6.8-21L113 217.9l118.3-18.4c7.9-1.2 14.6-6.2 18.1-13.3L287.9 79z"/></svg>',
    check:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>',
    alert:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>',
    home: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8l-.7-160.2H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>',
  };

  async resolve(icon: string): Promise<string | null> {
    return this.iconMap[icon] || null;
  }
}

@Component({
  selector: 'demo-icon-usage',
  standalone: true,
  imports: [CommonModule, AXButtonComponent, AXDecoratorGenericComponent],
  providers: [
    {
      provide: AX_ICON_RESOLVER,
      useClass: DemoIconResolver,
    },
  ],
  templateUrl: './usage.component.html',
})
export class UsageComponent {
  private iconResolver = inject(AXIconResolverService);

  selectedIcon = signal<string>('heart');
  resolvedSvg = signal<string>('');
  isLoading = signal<boolean>(false);
  error = signal<string | null>(null);

  availableIcons = ['heart', 'star', 'check', 'alert', 'home'];

  constructor() {
    // Resolve the initial icon
    this.resolveIcon(this.selectedIcon());
  }

  async resolveIcon(iconName: string) {
    this.selectedIcon.set(iconName);
    this.isLoading.set(true);
    this.error.set(null);

    try {
      const svg = await this.iconResolver.resolve(iconName);
      this.resolvedSvg.set(svg);
    } catch (err) {
      this.error.set(
        err instanceof Error ? err.message : 'Failed to resolve icon'
      );
      this.resolvedSvg.set('');
    } finally {
      this.isLoading.set(false);
    }
  }
}
