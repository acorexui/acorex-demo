import { Component } from '@angular/core';

import { AXAvatarModule } from '@acorex/components/avatar';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXImageModule } from '@acorex/components/image';
import { AXLoadingModule } from '@acorex/components/loading';

@Component({
    templateUrl: 'size.component.html',
    imports: [
        AXAvatarModule,
        AXDecoratorModule,
        AXImageModule,
        AXLoadingModule,
    ]
})
export class TextModeComponent {}
