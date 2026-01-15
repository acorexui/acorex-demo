import { Component, signal } from '@angular/core';
import { AXSafePipe } from '@acorex/core/pipes';
import { AXDecoratorHeadingComponent } from '@acorex/components/decorators';

@Component({
  selector: 'app-pipes-usage',
  templateUrl: 'usage.component.html',
  imports: [AXSafePipe, AXDecoratorHeadingComponent],
})
export class UsageComponent {
  // Simple examples
  htmlContent = signal(
    '<p class="ax-text-green-600 ax-font-bold">Hello from safe HTML!</p>'
  );
  dynamicStyle = signal(
    'background: #4ade80; color: white; padding: 16px; border-radius: 8px;'
  );
  externalUrl = signal('https://angular.io');
}
