import { Component } from "@angular/core";
import { AXButtonModule } from "@acorex/components/button";
import { AXDecoratorModule } from "@acorex/components/decorators";
import { AXDropdownButtonModule } from '@acorex/components/dropdown-button';


@Component({
    templateUrl: './usage.component.html',
    imports: [AXButtonModule, AXDecoratorModule, AXDropdownButtonModule]
})
export class DropdownButtonUsageComponent {}
