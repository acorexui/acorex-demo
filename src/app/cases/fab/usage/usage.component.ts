import { AXButtonModule } from '@acorex/components/button';
import { AXDialogModule } from '@acorex/components/dialog';
import { Component } from '@angular/core';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXFabComponent, AXFabItemComponent } from '@acorex/components/fab';
import { AXClickEvent } from '@acorex/cdk/common';

@Component({
  templateUrl: 'usage.component.html',
  imports: [
    AXButtonModule,
    AXDialogModule,
    AXDecoratorModule,
    AXFabComponent,
    AXFabItemComponent,
  ],
})
export class UsageComponent {
  click(e: AXClickEvent) {
    console.log(e);
  }
}
