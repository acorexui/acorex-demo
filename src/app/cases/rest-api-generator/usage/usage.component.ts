import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AXRestApiGeneratorModule,
  AXRestApiOutput,
} from '@acorex/components/rest-api-generator';

@Component({
  templateUrl: 'usage.component.html',
  imports: [FormsModule, AXRestApiGeneratorModule],
})
export class UsageComponent {
  changeHandler(e: AXRestApiOutput) {
    console.log(e);
  }
}
