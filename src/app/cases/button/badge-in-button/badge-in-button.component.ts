import { AXBadgeModule } from '@acorex/components/badge';
import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
    templateUrl: './badge-in-button.component.html',
    imports: [AXButtonModule, AXDecoratorModule, AXBadgeModule]
})
export class BadgeInButtonComponent {}
