import { Component } from '@angular/core';

import { AXOtpModule } from '@acorex/components/otp';

@Component({
  standalone: true,
  templateUrl: 'copy-paste.component.html',
  imports: [AXOtpModule],
})
export class CopyPasteComponent {
  handleCopyClick(content: string) {
    navigator.clipboard.writeText(content);
  }
}
