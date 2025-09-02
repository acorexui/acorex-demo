import {
  AXColorPaletteComponent,
  AXColorPaletteInputComponent,
  AXColorPaletteSwatchesComponent,
} from '@acorex/components/color-palette';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'custom-swatches-favorites.component.html',
  standalone: true,
  imports: [
    FormsModule,
    AXColorPaletteComponent,
    AXColorPaletteSwatchesComponent,
    AXColorPaletteInputComponent,
  ],
})
export class CustomSwatchesFavoritesComponent {
  selected = '#ff5722';

  customColors: { code: string }[] = [
    { code: '#ff5722' },
    { code: '#4caf50' },
    { code: '#2196f3' },
    { code: '#9c27b0' },
    { code: '#ffc107' },
    { code: '#795548' },
  ];

  favoriteColors: { code: string }[] = [
    { code: '#ffffff' },
    { code: '#000000' },
    { code: '#f44336' },
  ];
}
