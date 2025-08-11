import { AXAvatarComponent } from '@acorex/components/avatar';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'text-mode.component.html',
  imports: [AXAvatarComponent, AXDecoratorGenericComponent],
})
export class TextModeComponent {}
