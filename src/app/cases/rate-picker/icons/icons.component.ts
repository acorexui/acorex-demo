import { Component } from '@angular/core';
import { AXRatePickerComponent } from '@acorex/components/rate-picker';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [AXRatePickerComponent, FormsModule],
  templateUrl: './icons.component.html',
})
export class IconsComponent {
  valueHeart?: number;
  valueThumbs?: number;
  valueSmile?: number;
  valueFire?: number;
}
