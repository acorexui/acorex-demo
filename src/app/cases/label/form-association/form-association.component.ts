import { AXFormFieldComponent } from '@acorex/components/form';
import { AXLabelComponent } from '@acorex/components/label';
import { AXTextBoxComponent } from '@acorex/components/text-box';
import { Component, ViewChild } from '@angular/core';
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
export class LabelFormAssociationComponent {
  @ViewChild('nameLabel') nameLabel!: AXLabelComponent;
  @ViewChild('nameInput') nameInput!: AXTextBoxComponent;
  @ViewChild('emailLabel') emailLabel!: AXLabelComponent;
  @ViewChild('emailInput') emailInput!: AXTextBoxComponent;
  @ViewChild('passwordLabel') passwordLabel!: AXLabelComponent;
  @ViewChild('passwordInput') passwordInput!: AXTextBoxComponent;

  ngAfterViewInit() {
    // Associate labels with their respective inputs
    this.nameLabel.for = this.nameInput;
    this.emailLabel.for = this.emailInput;
    this.passwordLabel.for = this.passwordInput;
  }
}
