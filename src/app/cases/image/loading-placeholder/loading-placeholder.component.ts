import { Component } from '@angular/core';

import { AXImageModule } from '@acorex/components/image';
import { AXLoadingModule } from '@acorex/components/loading';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
    templateUrl: 'loading-placeholder.component.html',
    imports: [AXImageModule, AXLoadingModule, AXDecoratorModule]
})
export class LoadingPlaceholderComponent {}
