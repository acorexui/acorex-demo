import { Component } from '@angular/core';
import { AXQrcodeComponent } from '@acorex/components/qrcode';

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [AXQrcodeComponent],
  templateUrl: './colors.component.html',
})
export class ColorsComponent {}
