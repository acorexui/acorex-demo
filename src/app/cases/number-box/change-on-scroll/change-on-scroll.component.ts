import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXNumberBoxModule } from '@acorex/components/number-box';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    templateUrl: './change-on-scroll.component.html',
    imports: [AXNumberBoxModule, AXDecoratorModule, FormsModule, CommonModule]
})
export class ChangeOnScrollComponent {
  protected options = signal({
    value: 0,
    changeOnScroll: true,
  });
}
