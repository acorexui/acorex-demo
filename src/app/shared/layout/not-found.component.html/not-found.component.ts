import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXResultModule } from '@acorex/components/result';
import { Component } from '@angular/core';

@Component({
    selector: 'not-found',
    templateUrl: './not-found.component.html',
    imports: [AXResultModule, AXDecoratorModule,]
})
export class NotFoundComponent {}
