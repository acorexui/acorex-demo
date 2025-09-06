import { AXSwitchComponent } from '@acorex/components/switch';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './loading.component.html',
  imports: [FormsModule, AXSwitchComponent],
})
export class LoadingComponent {}
