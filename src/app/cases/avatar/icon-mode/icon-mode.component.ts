import { Component } from '@angular/core';

import { AXAvatarModule } from '@acorex/components/avatar';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
    templateUrl: 'icon-mode.component.html',
    imports: [AXAvatarModule, AXDecoratorModule],
    standalone: true,
})
export class IconModeComponent {}
