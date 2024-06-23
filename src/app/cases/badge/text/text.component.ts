import { Component } from '@angular/core';

import { AXBadgeModule } from '@acorex/components/badge';

@Component({
    standalone: true,
    templateUrl: 'text.component.html',
    imports: [AXBadgeModule],
})
export class TextComponent {}
