import { Component } from '@angular/core';
import { AXPasswordBoxModule } from '@acorex/components/password-box';

@Component({
  templateUrl: './password-strength-validation.component.html',
  standalone: true,
  imports: [AXPasswordBoxModule],
})
export class PasswordStrengthValidationComponent {}