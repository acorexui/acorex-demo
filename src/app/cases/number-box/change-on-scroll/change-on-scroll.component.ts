import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXNumberBoxModule } from '@acorex/components/number-box';

import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    templateUrl: './change-on-scroll.component.html',
    imports: [AXNumberBoxModule, AXDecoratorModule, FormsModule]
})
export class ChangeOnScrollComponent {
  protected options = signal({
    value: 0,
    changeOnScroll: true,
  });
}
