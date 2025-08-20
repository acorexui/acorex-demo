import { AXButtonComponent } from '@acorex/components/button';
import { Component } from '@angular/core';

@Component({
  templateUrl: './form-submit-reset.component.html',
  imports: [AXButtonComponent],
})
export class FormSubmitResetComponent {
  message = '';

  onSubmit(e: Event) {
    e.preventDefault();
    this.message = 'Submitted!';
  }

  onReset() {
    this.message = 'Reset!';
  }
}
