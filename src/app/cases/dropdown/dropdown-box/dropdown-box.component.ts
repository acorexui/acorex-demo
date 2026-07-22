import { AXButtonComponent } from '@acorex/components/button';
import {
  AXDropdownBoxComponent,
  MXDropdownBoxBaseComponent,
} from '@acorex/components/dropdown';
import { Component, viewChild, ViewChild } from '@angular/core';

@Component({
  templateUrl: 'dropdown-box.component.html',
  imports: [AXDropdownBoxComponent, AXButtonComponent],
})
export class DropdownBoxComponent extends MXDropdownBoxBaseComponent {
  @ViewChild(AXDropdownBoxComponent)
  protected dropdown!: AXDropdownBoxComponent;

  protected openPanel() {
    this.dropdown.open();
  }
  protected closePanel() {
    this.dropdown.close();
  }
}
