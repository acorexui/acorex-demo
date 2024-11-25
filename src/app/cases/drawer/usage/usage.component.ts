import { Component } from '@angular/core';
import { AXDrawerModule } from '@acorex/components/drawer';
import { CommonModule } from '@angular/common';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXButtonModule } from '@acorex/components/button';

@Component({
    templateUrl: './usage.component.html',
    imports: [AXDrawerModule, CommonModule, AXDecoratorModule, AXButtonModule]
})
export class DrawerUsageComponent {}
