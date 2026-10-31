import { AXButtonComponent } from '@acorex/components/button';
import { AXFormModule } from '@acorex/components/form';
import { AXLabelModule } from '@acorex/components/label';
import { AXSwitchComponent } from '@acorex/components/switch';
import { AXTextBoxModule } from '@acorex/components/text-box';
import { AXToastModule, AXToastService } from '@acorex/components/toast';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './timeout-progress.component.html',
  imports: [
    FormsModule,
    AXButtonComponent,
    AXToastModule,
    AXSwitchComponent,
    AXTextBoxModule,
    AXFormModule,
    AXLabelModule,
  ],
})
export class TimeoutProgressComponent {
  private readonly toastService = inject(AXToastService);

  protected timeOutProgress = signal(true);
  protected timeOut = signal(5000);

  protected showToast(): void {
    const timeOut = Number(this.timeOut()) || 0;
    const timeOutProgress = this.timeOutProgress();

    this.toastService.show({
      color: 'primary',
      title: timeOutProgress ? 'With progress bar' : 'Without progress bar',
      content: `Auto-dismiss after ${timeOut} ms.`,
      closeButton: true,
      timeOut,
      timeOutProgress,
    });
  }
}
