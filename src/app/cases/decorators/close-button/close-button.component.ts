import { AXAlertModule } from '@acorex/components/alert';
import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: './close-button.component.html',
  imports: [AXDecoratorModule, AXAlertModule, AXButtonModule],
})
export class CloseButtonComponent {}
