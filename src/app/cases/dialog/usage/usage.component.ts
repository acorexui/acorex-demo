import { AXButtonModule } from '@acorex/components/button';
import { AXDialogModule, AXDialogService } from '@acorex/components/dialog';
import { Component, inject, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    templateUrl: 'usage.component.html',
    imports: [AXButtonModule, AXDialogModule]
})
export class UsageComponent {
  private _dialogService: AXDialogService = inject(AXDialogService);

  _handleClick() {
    const dialog = this._dialogService.open({
      content: 'Are you sure?',
      title: 'Task',
      type: 'warning',
      buttons: [
        {
          text: 'Yes',
          color: 'warning',
          onClick: () => {
            dialog.close();
          },
        },
        {
          text: 'No',
          color: 'ghost',
          autofocus: true,
          onClick: () => {
            dialog.close();
          },
        },
      ],
    });
  }
}
