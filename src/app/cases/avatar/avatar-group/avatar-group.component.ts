import { Component } from '@angular/core';

import { AXAvatarModule } from '@acorex/components/avatar';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
    templateUrl: 'avatar-group.component.html',
    imports: [AXAvatarModule, AXDecoratorModule]
})
export class AvatarGroupComponent {}
