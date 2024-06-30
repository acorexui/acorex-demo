import { Component } from '@angular/core';

import { AXColorBoxModule } from '@acorex/components/color-box';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  templateUrl: 'read-only.component.html',
  imports: [AXColorBoxModule, FormsModule],
})
export class ReadOnlyComponent {}
