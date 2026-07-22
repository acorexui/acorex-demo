import { AXButtonModule } from '@acorex/components/button';
import {
  AXFormMessageStyle,
  AXFormModule,
  AXFormUpdateOn,
  AXFormValidationEvent,
} from '@acorex/components/form';
import { AXLabelModule } from '@acorex/components/label';
import { AXTextBoxModule } from '@acorex/components/text-box';

import { Component } from '@angular/core';

@Component({
  templateUrl: 'validate.component.html',
  imports: [
    AXFormModule,
    AXTextBoxModule,
    AXLabelModule,
    AXButtonModule
],
})
export class ValidateOnValidateComponent {
  options = {
    validateOn: 'change' as AXFormUpdateOn,
    messageStyle: 'float' as AXFormMessageStyle,
  };

  onFormValidated(event: AXFormValidationEvent) {
    console.log(event.result);
  }
}
