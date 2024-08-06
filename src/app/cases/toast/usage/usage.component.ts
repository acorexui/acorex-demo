import { AXButtonModule } from '@acorex/components/button';
import { AXStyleColorType, AXLocation } from '@acorex/components/common';
import { AXToastModule, AXToastService } from '@acorex/components/toast';
import { Component, inject, signal } from '@angular/core';

@Component({
  templateUrl: './usage.component.html',
  standalone: true,
  imports: [AXButtonModule, AXToastModule],
})
export class UsageComponent {
  toastService = inject(AXToastService);

  protected options = signal({
    color: 'primary',
    location: 'bottom-center',
    showTitle: true,
    showContent: true,
    closeButton: true,
    timeOut: 3000,
    timeOutProgress: true,
    autoClose: true,
  });

  launchToast() {
    this.toastService.show({
      title: this.options().showTitle ? 'Toast title' : '',
      content: this.options().showContent
        ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fugiat a quibusdam repellendus voluptates cupiditate?'
        : '',
      color: this.options().color as AXStyleColorType,
      location: this.options().location as AXLocation,
      closeButton: this.options().closeButton,
      timeOut: this.options().autoClose ? this.options().timeOut : undefined,
      timeOutProgress:
        this.options().autoClose && this.options().timeOutProgress,
      icon: '',
    });
  }
}
