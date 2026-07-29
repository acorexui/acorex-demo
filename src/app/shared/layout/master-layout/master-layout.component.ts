import { AXPlatform } from '@acorex/core/platform';
import { Component, DOCUMENT, inject, PLATFORM_ID, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
@Component({
    selector: 'app-master-layout',
    templateUrl: './master-layout.component.html',
    styleUrls: ['./master-layout.component.scss'],
    imports: [RouterOutlet]
})
export class MasterLayoutComponent {
  platform = inject(AXPlatform);
  route = inject(ActivatedRoute);
  private document = inject(DOCUMENT);
private platformId = inject(PLATFORM_ID);
  constructor() {
     this.route.queryParamMap.subscribe(params => {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    switch (params.get('theme')) {
      case 'dark':
        this.platform.switchDarkMode();
        break;
      case 'light':
        this.platform.switchLightMode();
        break;
      case 'system':
      default:
        this.platform.switchSystemMode();
    }

    const rtl = params.get('rtl') === 'true';
    this.document.documentElement.dir = rtl ? 'rtl' : 'ltr';
  });
  }
  year = signal(new Date().getFullYear());
}
