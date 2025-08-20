import { AXBadgeComponent } from '@acorex/components/badge';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'prefix-suffix.component.html',
  imports: [
    AXBadgeComponent,
    AXDecoratorGenericComponent,
    AXDecoratorIconComponent,
  ],
})
export class PrefixSuffixComponent {}
