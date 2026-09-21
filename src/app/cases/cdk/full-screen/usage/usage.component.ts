import { AXFullScreenDirective } from '@acorex/cdk/full-screen';
import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { Component, signal } from '@angular/core';
import { AXBadgeComponent } from '@acorex/components/badge';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXFullScreenDirective, AXButtonModule, AXDecoratorModule, AXBadgeComponent],
})
export class UsageComponent {
  protected overlayActive = signal(false);
}
