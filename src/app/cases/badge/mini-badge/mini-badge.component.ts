import { Component } from '@angular/core';

import { AXBadgeModule } from '@acorex/components/badge';

@Component({
    standalone: true,
    templateUrl: 'mini-badge.component.html',
    imports: [AXBadgeModule],
})
export class MiniBadgeComponent {}
