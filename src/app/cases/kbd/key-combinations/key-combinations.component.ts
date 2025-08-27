import { AXKBDComponent, AXKBDItemComponent } from '@acorex/components/kbd';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'key-combinations.component.html',
  imports: [AXKBDComponent, AXKBDItemComponent],
})
export class KeyCombinationsComponent {}
