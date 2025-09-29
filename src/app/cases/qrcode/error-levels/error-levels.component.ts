import { Component } from '@angular/core';
import { AXQrcodeComponent } from '@acorex/components/qrcode';

@Component({
  selector: 'app-error-levels',
  standalone: true,
  imports: [AXQrcodeComponent],
  templateUrl: './error-levels.component.html',
})
export class ErrorLevelsComponent {}
