import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorIconComponent } from '@acorex/components/decorators';
import { AXLabelComponent } from '@acorex/components/label';
import {
  AXStepWizardComponent,
  AXStepWizardItemComponent,
} from '@acorex/components/step-wizard';
import { AXSwitchComponent } from '@acorex/components/switch';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './connector-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    AXLabelComponent,
    AXButtonComponent,
    AXSwitchComponent,
    AXStepWizardComponent,
    AXDecoratorIconComponent,
    AXStepWizardItemComponent,
  ],
})
export class ConnectorOptionsComponent {
  showConnector = signal<boolean>(true);

  toggleConnector(value: boolean) {
    this.showConnector.set(value);
  }
}
