import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { AXMenuComponent, AXMenuItemComponent } from '@acorex/components/menu';
import { Component, viewChild } from '@angular/core';

@Component({
  templateUrl: 'programmatic-close.component.html',
  imports: [
    AXMenuComponent,
    AXMenuItemComponent,
    AXDecoratorGenericComponent,
    AXButtonComponent,
  ],
})
export class ProgrammaticCloseComponent {
  menu = viewChild<AXMenuComponent>('menuRef');

  protected closeAll(e: MouseEvent) {
    e.stopPropagation();
    setTimeout(() => {
      this.menu()?.close();
    }, 1000);
  }
}
