import { AXButtonComponent } from '@acorex/components/button';
import { AXLabelModule } from '@acorex/components/label';
import { AXSwitchComponent } from '@acorex/components/switch';
import { AXToastModule, AXToastService } from '@acorex/components/toast';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './pause-hover.component.html',
  imports: [
    FormsModule,
    AXButtonComponent,
    AXToastModule,
    AXSwitchComponent,
    AXLabelModule,
  ],
})
export class PauseHoverComponent {
  private readonly toastService = inject(AXToastService);

  protected pauseOnHover = signal(true);

  protected showToast(): void {
    const pauseOnHover = this.pauseOnHover();

    this.toastService.show({
      color: pauseOnHover ? 'primary' : 'warning',
      title: pauseOnHover ? 'Pause on hover' : 'No pause on hover',
      content: pauseOnHover
        ? 'Hover over this toast to pause the countdown timer.'
        : 'Hovering over this toast will not pause the timer.',
      closeButton: true,
      timeOut: 8000,
      timeOutProgress: true,
      pauseOnHover,
    });
  }
}
