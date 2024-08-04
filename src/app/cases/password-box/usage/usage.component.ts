import { Component } from '@angular/core';
import { AXPasswordBoxModule } from '@acorex/components/password-box';

@Component({
  templateUrl: './usage.component.html',
  standalone: true,
  imports: [AXPasswordBoxModule],
})
export class UsageComponent {}
