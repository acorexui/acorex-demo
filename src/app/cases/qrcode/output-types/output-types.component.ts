import { Component } from '@angular/core';
import { AXQrcodeComponent } from '@acorex/components/qrcode';

@Component({
  selector: 'app-output-types',
  standalone: true,
  imports: [AXQrcodeComponent],
  templateUrl: './output-types.component.html',
})
export class OutputTypesComponent {}
