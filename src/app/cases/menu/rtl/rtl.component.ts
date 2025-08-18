import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { AXMenuComponent, AXMenuItemComponent } from '@acorex/components/menu';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'rtl.component.html',
  imports: [AXMenuComponent, AXMenuItemComponent, AXDecoratorGenericComponent],
})
export class RtlComponent {}
