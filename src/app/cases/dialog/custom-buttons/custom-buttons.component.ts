import { AXButtonModule } from '@acorex/components/button';
import { AXDialogModule, AXDialogService } from '@acorex/components/dialog';
import { Component, inject, signal } from '@angular/core';

@Component({
  templateUrl: 'custom-buttons.component.html',
  imports: [AXButtonModule, AXDialogModule],
})
export class CustomButtonsComponent {
  private dialog = inject(AXDialogService);
  clickedName = signal<string | undefined>(undefined);

  async openCustom() {
    const { name } = await this.dialog.show({
      title: 'Unsaved changes',
      content: 'You have unsaved changes. What would you like to do?',
      type: 'warning',
      orientation: 'vertical',
      buttons: [
        { name: 'save', text: 'Save', color: 'success' },
        { name: 'discard', text: 'Discard', color: 'danger' },
        { name: 'cancel', text: 'Cancel', color: 'default', autofocus: true },
      ],
    });
    this.clickedName.set(name);
  }
}


