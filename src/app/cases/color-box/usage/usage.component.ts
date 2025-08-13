import { AXColorBoxComponent } from '@acorex/components/color-box';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXColorBoxComponent, FormsModule],
})
export class UsageComponent {}
