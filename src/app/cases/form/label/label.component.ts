import { AXFormModule } from '@acorex/components/form';
import { AXLabelModule } from '@acorex/components/label';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { AXTextBoxModule } from '@acorex/components/text-box';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type FormLabelMode = 'static' | 'over' | 'floating';

@Component({
  templateUrl: 'label.component.html',
  imports: [
    FormsModule,
    AXFormModule,
    AXTextBoxModule,
    AXLabelModule,
    AXSelectBoxComponent,
  ],
})
export class LabelComponent {
  protected labelMode = signal<FormLabelMode>('static');

  private readonly modes = signal<FormLabelMode[]>(['static', 'over', 'floating']);

  protected labelModeOptions = computed(() =>
    this.modes().map((mode) => ({
      value: mode,
      text: mode.charAt(0).toUpperCase() + mode.slice(1),
    })),
  );
}
