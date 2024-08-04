import { AXPasswordBoxModule } from '@acorex/components/password-box';
import { Component } from '@angular/core';

@Component({
  templateUrl: './toggle.component.html',
  standalone: true,
  imports: [AXPasswordBoxModule],
})
export class ToggleComponent {}
