import { Component } from '@angular/core';
import { AXButtonModule } from '@acorex/components/button';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXButtonModule],
})
export class UsageComponent {
  open() {
    console.log('click!');
  }
}
