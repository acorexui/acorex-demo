import { AXButtonComponent } from '@acorex/components/button';
import { AXCheckBoxComponent } from '@acorex/components/check-box';
import { AXLabelComponent } from '@acorex/components/label';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'loading.component.html',
  imports: [AXCheckBoxComponent, AXButtonComponent, AXLabelComponent],
})
export class LoadingComponent {
  protected isLoading = signal(true);
}
