import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { Component } from '@angular/core';
import { AXDropdownModule } from '@acorex/components/dropdown';


@Component({
    templateUrl: './dropdown.component.html',
    standalone: true,
    imports: [AXButtonModule, AXDecoratorModule, AXDropdownModule],
})
export class DropdownComponent {
  handleOnItemClick(e: any) {
    console.log(e)
  }

}
