import { AXButtonComponent } from '@acorex/components/button';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXButtonComponent],
})
export class UsageComponent {
  open() {
    console.log('click!');
  }
}
