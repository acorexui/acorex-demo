import { Component, OnInit } from '@angular/core';
import { AXNavModule } from '@acorex/components/nav';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXBadgeModule } from '@acorex/components/badge';

@Component({
  standalone: true,
  templateUrl: './using-decorator.component.html',
  imports: [AXNavModule, AXDecoratorModule,AXBadgeModule],
})
export class UsageDecoratorComponent {}
