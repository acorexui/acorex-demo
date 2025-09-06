import {
  AXSwitchComponent,
  AXSwitchContentComponent,
} from '@acorex/components/switch';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './on-off.component.html',
  imports: [FormsModule, AXSwitchComponent, AXSwitchContentComponent],
})
export class OnOffComponent {}
