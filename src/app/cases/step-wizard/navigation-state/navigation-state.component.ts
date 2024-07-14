import { Component, inject } from '@angular/core';
import { AXStepWizardModule } from '@acorex/components/step-wizard';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXButtonModule } from '@acorex/components/button';
import { AXDropdownButtonModule } from '@acorex/components/dropdown-button';
import { AXToastModule, AXToastService } from '@acorex/components/toast';

@Component({
  templateUrl: './navigation-state.component.html',
  standalone: true,
  imports: [
    AXStepWizardModule,
    AXDecoratorModule,
    AXButtonModule,
    AXDropdownButtonModule,
    AXToastModule,
  ],
})
export class NavigationStateComponent {
  protected toastService = inject(AXToastService);

  protected handleDone() {
    this.toastService.show({
      color: 'success',
      title: 'Process Completed Successfully',
      timeOut: 3000,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fugiat a quibusdam repellendus voluptates cupiditate?',
    });
  }
}
