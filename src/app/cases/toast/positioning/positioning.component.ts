import { AXLocation } from '@acorex/cdk/common';
import { AXButtonComponent } from '@acorex/components/button';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { AXToastModule, AXToastService } from '@acorex/components/toast';
import { TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './positioning.component.html',
  imports: [FormsModule, AXToastModule, AXSelectBoxComponent],
})
export class PositioningComponent {
  private toastService = inject(AXToastService);

  locations: AXLocation[] = [
    'bottom-start',
    'bottom-center',
    'bottom-end',
    'top-start',
    'top-center',
    'top-end',
    'center-start',
    'center-end',
  ];

  showToast(location: AXLocation) {
    this.toastService.show({
      color: 'primary',
      title: 'Positioned Toast',
      content: `This toast appears at: ${location}`,
      location,
      closeButton: true,
      timeOut: 4000,
      timeOutProgress: true,
    });
  }
}
