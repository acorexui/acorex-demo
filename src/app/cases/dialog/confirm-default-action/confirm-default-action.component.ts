import { AXButtonModule } from '@acorex/components/button';
import { AXDialogModule, AXDialogService } from '@acorex/components/dialog';
import { Component, inject, signal } from '@angular/core';

@Component({
  templateUrl: 'confirm-default-action.component.html',
  imports: [AXButtonModule, AXDialogModule],
})
export class ConfirmDefaultActionComponent {
  private dialog = inject(AXDialogService);
  resultText = signal<string | undefined>(undefined);

  async askConfirm() {
    const { result } = await this.dialog.confirm(
      'Delete item',
      'Are you sure you want to delete this item?',
      'danger',
      'horizontal',
      undefined,
      'cancel'
    );
    this.resultText.set(result ? 'Confirmed' : 'Cancelled');
  }
}


