import { AXCheckBoxComponent } from '@acorex/components/check-box';
import { AXLabelComponent } from '@acorex/components/label';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'colors.component.html',
  imports: [AXCheckBoxComponent, AXLabelComponent, FormsModule],
})
export class ColorsComponent {}
