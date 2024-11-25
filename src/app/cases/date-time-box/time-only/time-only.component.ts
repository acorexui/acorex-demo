import { AXDateTimeBoxModule } from '@acorex/components/datetime-box';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXFormModule } from '@acorex/components/form';
import { AXLabelModule } from '@acorex/components/label';
import { Component } from '@angular/core';

@Component({
    templateUrl: 'time-only.component.html',
    imports: [
        AXFormModule,
        AXLabelModule,
        AXDateTimeBoxModule,
        AXDecoratorModule,
    ]
})
export class TimeOnlyComponent {}
