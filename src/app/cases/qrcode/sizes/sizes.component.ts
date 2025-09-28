import { Component } from '@angular/core';
import { AXQrcodeComponent } from '@acorex/components/qrcode';

@Component({
  selector: 'app-sizes',
  standalone: true,
  imports: [AXQrcodeComponent],
  templateUrl: './sizes.component.html',
})
export class SizesComponent {}
