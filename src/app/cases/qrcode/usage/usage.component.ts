import { Component } from '@angular/core';
import { AXQrcodeModule } from '@acorex/components/qrcode';

@Component({
  templateUrl: './usage.component.html',
  standalone: true,
  imports: [AXQrcodeModule],
})
export class UsageComponent {}
