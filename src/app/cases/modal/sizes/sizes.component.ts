import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { AXModalComponent, AXModalOptions } from '@acorex/components/modal';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'sizes.component.html',
  imports: [AXModalComponent, AXButtonComponent, AXDecoratorGenericComponent],
})
export class SizesComponent {
  protected sizes: {
    name: string;
    size: 'sm' | 'md' | 'lg' | 'full' | 'fit';
  }[] = [
    { name: 'Small', size: 'sm' },
    { name: 'Medium', size: 'md' },
    { name: 'Large', size: 'lg' },
    { name: 'Full Screen', size: 'full' },
    { name: 'Fit Content', size: 'fit' },
  ];

  protected getOptions(
    size: 'sm' | 'md' | 'lg' | 'full' | 'fit'
  ): AXModalOptions {
    return {
      title: `${size.toUpperCase()} Modal`,
      size,
      header: true,
      draggable: true,
      backdrop: {
        enabled: true,
        closeOnClick: true,
        background: true,
      },
    };
  }
}
