import { Component, signal } from '@angular/core';
import { AXDataPagerModule } from '@acorex/components/data-pager';

@Component({
  templateUrl: './compact-interaction.component.html',
  imports: [AXDataPagerModule],
})
export class CompactInteractionComponent {
  protected isLoading = signal(false);
  protected isDisabled = signal(false);
  protected isReadonly = signal(false);

  protected total = 100;
  protected size = 10;
}
