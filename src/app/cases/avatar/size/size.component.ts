import { AXAvatarComponent } from '@acorex/components/avatar';
import { AXImageComponent } from '@acorex/components/image';
import { AXLoadingComponent } from '@acorex/components/loading';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'size.component.html',
  imports: [AXAvatarComponent, AXImageComponent, AXLoadingComponent],
})
export class TextModeComponent {}
