import { Component } from '@angular/core';
import { AXPhoneBoxModule } from '@acorex/components/phone-box';


@Component({
  standalone: true,
  templateUrl: './only-countries.component.html',
  imports: [AXPhoneBoxModule],
})
export class OnlyCountriesComponent {}
