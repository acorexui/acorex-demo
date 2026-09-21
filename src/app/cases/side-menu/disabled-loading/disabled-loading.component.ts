import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSideMenuModule } from '@acorex/components/side-menu';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'disabled-loading.component.html',
  imports: [AXSideMenuModule, AXDecoratorModule, AXButtonModule],
})
export class DisabledLoadingComponent {
  protected readonly disabled = signal(false);
  protected readonly isLoading = signal(false);
}
