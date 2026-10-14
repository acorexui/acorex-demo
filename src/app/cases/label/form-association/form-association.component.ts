import { AXFormFieldComponent } from '@acorex/components/form';
import { AXLabelComponent } from '@acorex/components/label';
import { AXTextBoxComponent } from '@acorex/components/text-box';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-label-form-association',
  imports: [
    FormsModule,
    AXLabelComponent,
    AXTextBoxComponent,
    AXFormFieldComponent,
  ],
  templateUrl: './form-association.component.html',
})
export class LabelFormAssociationComponent implements AfterViewInit {
  @ViewChild('nameLabel') nameLabel!: AXLabelComponent;
  @ViewChild('nameInput') nameInput!: AXTextBoxComponent;
  @ViewChild('emailLabel') emailLabel!: AXLabelComponent;
  @ViewChild('emailInput') emailInput!: AXTextBoxComponent;

  ngAfterViewInit() {
    this.nameLabel.for = this.nameInput;
    this.emailLabel.for = this.emailInput;
  }
}
