import { Component } from '@angular/core';

import { AXDirection } from '@acorex/components/common';
import { AXDecoratorModule } from '@acorex/components/decorators';
import {
    AXSelectionListLook,
    AXSelectionListModule,
} from '@acorex/components/selection-list';

@Component({
    standalone: true,
    templateUrl: 'horizontal.component.html',
    imports: [AXSelectionListModule, AXDecoratorModule],
})
export class UsageComponent {
    protected items = [
        { id: 1, text: 'Apple 🍏' },
        { id: 2, text: 'Orange 🍊' },
        { id: 3, text: 'Banana 🍌' },
    ];

    protected options = {
        direction: 'horizontal' as AXDirection,
        value: 1,
        showControl: true,
        look: 'card' as AXSelectionListLook,
    };
}
