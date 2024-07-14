import { Component } from '@angular/core';
import { AXTabsModule } from '@acorex/components/tabs';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXBadgeModule } from '@acorex/components/badge';

@Component({
  standalone: true,
  templateUrl: './decoration.component.html',
  imports: [AXTabsModule, AXDecoratorModule, AXBadgeModule],
})
export class DecorationComponent {}
