import { Component } from '@angular/core';

import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSideMenuModule } from '@acorex/components/side-menu';

@Component({
    templateUrl: 'customize-font.component.html',
    imports: [AXSideMenuModule, AXDecoratorModule]
})
export class CustomizeFontComponent {}
