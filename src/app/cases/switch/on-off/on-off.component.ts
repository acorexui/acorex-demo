import { Component } from '@angular/core';
import { AXSwitchModule } from '@acorex/components/switch';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  templateUrl: './on-off.component.html',
  imports: [FormsModule,AXSwitchModule],
})
export class OnOffComponent {}
