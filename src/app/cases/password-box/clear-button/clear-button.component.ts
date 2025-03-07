import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXPasswordBoxModule } from '@acorex/components/password-box';
import { Component } from '@angular/core';

@Component({
    templateUrl: './clear-button.component.html',
    imports: [AXPasswordBoxModule, AXDecoratorModule]
})
export class ClearButtonComponent {}
