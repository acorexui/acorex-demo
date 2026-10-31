import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { AXTextEditorModule } from '@acorex/components/text-editor';
import type { AXTextEditorRecentColor } from '@acorex/cdk/text-editor';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type SwatchPreset = 'default' | 'brand';

@Component({
  templateUrl: './usage.component.html',
  imports: [
    FormsModule,
    AXTextEditorModule,
    AXSelectBoxComponent,
    AXDecoratorModule,
  ],
})
export class UsageComponent {
  protected readonly preset = signal<SwatchPreset>('brand');

  protected readonly presetOptions = [
    { value: 'default', text: 'Default swatch palettes' },
    { value: 'brand', text: 'Custom text & highlight colors' },
  ];

  protected readonly presetDataSource = computed(() => this.presetOptions);

  protected readonly brandTextColors = [
    '#1e3a8a',
    '#2563eb',
    '#7c3aed',
    '#db2777',
  ];

  protected readonly brandBackgroundColors = [
    '#dbeafe',
    '#e9d5ff',
    '#fce7f3',
    '#fef08a',
  ];

  protected readonly textColors = computed(() =>
    this.preset() === 'brand' ? this.brandTextColors : [],
  );

  protected readonly backgroundColors = computed(() =>
    this.preset() === 'brand' ? this.brandBackgroundColors : [],
  );

  protected readonly recentColors = signal<AXTextEditorRecentColor[]>([
    { kind: 'text', color: '#2563eb' },
    { kind: 'background', color: '#fef08a' },
  ]);

  protected readonly content = signal<string | null>(null);
}
