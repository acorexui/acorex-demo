import { AXMenuItem } from '@acorex/components/menu';
import { AXSideMenuModule } from '@acorex/components/side-menu';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'data-driven.component.html',
  imports: [AXSideMenuModule],
})
export class DataDrivenComponent {
  protected readonly items = signal<AXMenuItem[]>([
    {
      text: 'Dashboard',
      icon: 'fa-solid fa-gauge-simple',
      active: true,
      group: { title: 'Workspace' },
    },
    {
      text: 'Users',
      icon: 'fa-solid fa-user-group',
      suffix: { text: '24' },
      items: [
        { text: 'All users' },
        { text: 'Invites', disabled: true },
        { text: 'Sync directory', isLoading: true },
      ],
    },
    {
      text: 'Angular docs',
      icon: 'fa-solid fa-arrow-up-right-from-square',
      href: 'https://angular.dev/',
      target: '_blank',
      suffix: { text: '↗' },
    },
  ]);
}
