import { Component } from '@angular/core';
import { AXAvatarModule } from '@acorex/components/avatar';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXImageModule } from '@acorex/components/image';

@Component({
  templateUrl: 'image-mode.component.html',
  imports: [AXAvatarModule, AXDecoratorModule, AXImageModule],
})
export class ImageModeComponent {}
