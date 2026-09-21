import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSideMenuModule } from '@acorex/components/side-menu';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'toggle-on-click.component.html',
  imports: [AXSideMenuModule, AXDecoratorModule, AXButtonModule],
})
export class ToggleOnClickComponent {
  protected readonly usersExpanded = signal(true);

  protected toggleUsers(): void {
    this.usersExpanded.update((open) => !open);
  }
}
