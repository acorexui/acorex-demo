import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXNumberBoxModule } from '@acorex/components/number-box';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './separator.component.html',
  standalone: true,
  imports: [AXNumberBoxModule, AXDecoratorModule, FormsModule, CommonModule],
})
export class SeparatorComponent {
  protected options = signal({
    value: 0,
    thousandsSeparator: ',',
  });
}
