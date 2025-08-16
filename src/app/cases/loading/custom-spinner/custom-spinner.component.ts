import {
  AXLoadingComponent,
  AXLoadingSpinnerComponent,
} from '@acorex/components/loading';
import { Component, Provider } from '@angular/core';

// NOTE: Using documented token and helper inferred from docs context
import { AX_LOADING_CONFIG, loadingConfig } from '@acorex/components/loading';

@Component({
  selector: 'demo-mini-spinner',
  standalone: true,
  imports: [AXLoadingSpinnerComponent],
  template: `
    <ax-loading-spinner
      [text]="text"
      [color]="color"
      [size]="size"
      [stroke]="stroke"
    ></ax-loading-spinner>
  `,
})
export class DemoMiniSpinnerComponent {
  // These properties are assigned by AXLoadingComponent from the provided context
  text: string = '';
  color: any = 'default';
  size: number = 16;
  stroke: number = 3;
}

@Component({
  templateUrl: 'custom-spinner.component.html',
  imports: [AXLoadingComponent],
  providers: [
    {
      provide: AX_LOADING_CONFIG,
      useValue: loadingConfig({ spinner: DemoMiniSpinnerComponent }),
    } as Provider,
  ],
})
export class CustomSpinnerComponent {}
