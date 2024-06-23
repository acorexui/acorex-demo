import { Component } from '@angular/core';

import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSearchBoxModule } from '@acorex/components/search-box';

@Component({
    standalone: true,
    templateUrl: 'using-decorators.component.html',
    imports: [
        AXSearchBoxModule,
        AXDecoratorModule,
        AXButtonModule,
    ],
})
export class UsingDecoratorsComponent {}
