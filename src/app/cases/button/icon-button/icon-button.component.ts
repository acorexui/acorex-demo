import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
    templateUrl: './icon-button.component.html',
    imports: [AXButtonModule, AXDecoratorModule]
})
export class IconButtonComponent {}
