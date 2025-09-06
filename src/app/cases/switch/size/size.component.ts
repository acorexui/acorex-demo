import { AXLabelComponent } from '@acorex/components/label';
import { AXSwitchComponent } from '@acorex/components/switch';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './size.component.html',
  imports: [FormsModule, AXSwitchComponent, AXLabelComponent],
})
export class SizeComponent {}
