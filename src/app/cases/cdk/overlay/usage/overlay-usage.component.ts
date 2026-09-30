import {
  AXOverlayOptions,
  AXOverlayRef,
  AXOverlayService,
} from '@acorex/cdk/overlay';
import { AXButtonComponent } from '@acorex/components/button';
import {
  AXDecoratorGenericComponent,
  AXDecoratorHeadingComponent,
} from '@acorex/components/decorators';
import { AXPopupModule } from '@acorex/components/popup';
import {
  Component,
  ElementRef,
  inject,
  TemplateRef,
  viewChild,
} from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './overlay-usage.component.html',
  imports: [
    AXButtonComponent,
    AXDecoratorHeadingComponent,
    AXDecoratorGenericComponent,
    AXPopupModule,
  ],
})
export class OverlayUsageComponent {
  private overlay = inject(AXOverlayService);
  private templatePanel =
    viewChild.required<TemplateRef<void>>('templatePanel');
  private centeredPanel =
    viewChild.required<TemplateRef<void>>('centeredPanel');
  private templateAnchor =
    viewChild.required<ElementRef<HTMLElement>>('templateAnchor');
  private templateOverlayRef: AXOverlayRef<unknown> | null = null;
  private centeredOverlayRef: AXOverlayRef<unknown> | null = null;

  openTemplate = async (): Promise<void> => {
    this.templateOverlayRef?.dispose();
    const options: AXOverlayOptions = {
      width: '20rem',
      anchorOptions: {
        anchor: this.templateAnchor(),
        placement: 'bottom-start',
        offsetY: 8,
        autoFlip: true,
      },
      visualContextScope: 'theme',
      onDispose: () => {
        this.templateOverlayRef = null;
      },
    };
    const ref = await this.overlay.create(this.templatePanel(), options);
    this.templateOverlayRef = ref;
    requestAnimationFrame(() => ref.updatePosition());
  };

  openCentered = async (): Promise<void> => {
    this.centeredOverlayRef?.dispose();
    const options: AXOverlayOptions = {
      width: '22rem',
      backdrop: { enabled: true, background: true, closeOnClick: true },
      panelClass: 'ax-popup-overlay',
      visualContextScope: 'theme',
      onDispose: () => {
        this.centeredOverlayRef = null;
      },
    };
    this.centeredOverlayRef = await this.overlay.create(
      this.centeredPanel(),
      options,
    );
  };

  closeTemplate = (): void => {
    this.templateOverlayRef?.dispose();
  };

  closeCentered = (): void => {
    this.centeredOverlayRef?.dispose();
  };
}
