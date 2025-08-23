import { AXCheckBoxComponent } from '@acorex/components/check-box';
import {
  AXFormFieldComponent,
  AXValidationRuleDirective,
} from '@acorex/components/form';
import { AXLabelComponent } from '@acorex/components/label';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'validation.component.html',
  imports: [
    FormsModule,
    AXFormFieldComponent,
    AXValidationRuleDirective,
    AXCheckBoxComponent,
    AXLabelComponent,
  ],
})
export class ValidationComponent {
  protected value = signal<boolean | null>(null);
}
