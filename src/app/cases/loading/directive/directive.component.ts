import { AXButtonComponent } from '@acorex/components/button';
import { AXLoadingDirective } from '@acorex/components/loading';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'directive.component.html',
  imports: [AXLoadingDirective, AXButtonComponent],
})
export class DirectiveComponent {
  isLoading = false;

  toggle() {
    this.isLoading = !this.isLoading;
  }
}
