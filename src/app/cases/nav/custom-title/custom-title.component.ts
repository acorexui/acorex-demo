import { Component } from '@angular/core';
import { AXNavModule } from '@acorex/components/nav';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
    templateUrl: './custom-title.component.html',
    imports: [AXNavModule, AXDecoratorModule]
})
export class CustomTitleComponent {}
