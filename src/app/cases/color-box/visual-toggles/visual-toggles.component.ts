import { AXCheckBoxComponent } from '@acorex/components/check-box';
import { AXColorBoxComponent } from '@acorex/components/color-box';
import { AXLabelComponent } from '@acorex/components/label';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'visual-toggles.component.html',
  imports: [
    FormsModule,
    AXColorBoxComponent,
    AXCheckBoxComponent,
    AXLabelComponent,
  ],
})
export class VisualTogglesComponent {
  color = signal<string | null>('#22c55e');
  showBadge = signal(true);
  showValue = signal(true);
  showIcon = signal(true);
}
