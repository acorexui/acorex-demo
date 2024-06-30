import { Component } from '@angular/core';

import { AXImageModule } from '@acorex/components/image';
import { AXLoadingModule } from '@acorex/components/loading';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
  standalone: true,
  templateUrl: 'loading-placeholder.component.html',
  imports: [AXImageModule, AXLoadingModule, AXDecoratorModule]
})
export class LoadingPlaceholderComponent {}
