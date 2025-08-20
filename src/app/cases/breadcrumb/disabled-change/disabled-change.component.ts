import {
  AXBreadCrumbsComponent,
  AXBreadCrumbsItemComponent,
} from '@acorex/components/breadcrumbs';
import { AXCheckBoxComponent } from '@acorex/components/check-box';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AXLabelComponent } from '@acorex/components/label';

@Component({
  templateUrl: 'disabled-change.component.html',
  imports: [
    AXBreadCrumbsComponent,
    AXBreadCrumbsItemComponent,
    AXCheckBoxComponent,
    FormsModule,
    AXLabelComponent,
  ],
})
export class DisabledChangeComponent {
  readonly disabled = signal<boolean>(false);
}
