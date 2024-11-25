import { AXPlatform } from '@acorex/core/platform';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-master-layout',
    templateUrl: './master-layout.component.html',
    styleUrls: ['./master-layout.component.scss'],
    imports: [RouterOutlet]
})
export class MasterLayoutComponent {
  platform = inject(AXPlatform);
  route = inject(ActivatedRoute);

  constructor() {
    this.route.queryParamMap.subscribe((param) => {
      switch (param.get('theme')) {
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
    });
  }
  year = signal(new Date().getFullYear());
}
