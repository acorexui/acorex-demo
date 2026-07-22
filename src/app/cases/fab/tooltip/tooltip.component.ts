import { AXButtonModule } from '@acorex/components/button';
import { AXDialogModule } from '@acorex/components/dialog';
import { Component } from '@angular/core';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXFabComponent, AXFabItemComponent } from '@acorex/components/fab';
import { AXClickEvent } from '@acorex/cdk/common';
import { AXTooltipModule } from '@acorex/components/tooltip';

@Component({
  templateUrl: 'tooltip.component.html',
  imports: [
    AXButtonModule,
    AXDialogModule,
    AXDecoratorModule,
    AXFabComponent,
    AXFabItemComponent,
    AXTooltipModule,
  ],
})
export class TooltipComponent {
  click(e: AXClickEvent) {
    console.log(e);
  }
}
