import { Component } from '@angular/core';

import { AXTagModule } from '@acorex/components/tag';

@Component({
  standalone: true,
  templateUrl: 'colors.component.html',
  imports: [AXTagModule],
})
export class ColorsComponent {}
