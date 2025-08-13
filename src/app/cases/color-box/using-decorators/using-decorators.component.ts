import { AXButtonComponent } from '@acorex/components/button';
import { AXColorBoxComponent } from '@acorex/components/color-box';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'using-decorators.component.html',
  imports: [
    FormsModule,
    AXButtonComponent,
    AXColorBoxComponent,
    AXDecoratorGenericComponent,
  ],
})
export class UsingDecoratorsComponent {}
