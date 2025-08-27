import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { AXFormComponent, AXFormFieldComponent } from '@acorex/components/form';
import { AXLabelModule } from '@acorex/components/label';
import { AXTextBoxComponent } from '@acorex/components/text-box';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-label-accessibility',
  imports: [
    FormsModule,
    AXLabelModule,
    AXFormComponent,
    AXTextBoxComponent,
    AXFormFieldComponent,
    AXDecoratorGenericComponent,
  ],
  templateUrl: './accessibility.component.html',
})
export class LabelAccessibilityComponent {}
