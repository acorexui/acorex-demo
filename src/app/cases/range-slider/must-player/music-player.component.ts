import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import {
  AXRangeSliderComponent,
  AXRangeSliderModule,
} from '@acorex/components/range-slider';
import {
  Component,
  computed,
  effect,
  signal,
  viewChild,
  WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  templateUrl: './music-player.component.html',
  imports: [
    AXRangeSliderModule,
    FormsModule,
    AXButtonModule,
    AXDecoratorModule,
  ],
})
export class MusicPlayerComponent {
  protected value = signal({ value: 10, min: 10, max: 100 });
  protected timer: WritableSignal<NodeJS.Timeout | undefined> =
    signal(undefined);
  private rangeSlider = viewChild(AXRangeSliderComponent);
  protected style = computed(() => {
    return this.timer() === undefined ? 'fa-play' : 'fa-pause';
  });

  change(event: any) {
    console.log('event:', event);
    this.value.set({ ...this.value(), value: event });
    console.log('value:', this.value());
  }
  play() {
    if (!this.timer()) {
      this.timer.set(
        setInterval(() => {
          this.rangeSlider()?.increaseStep();
          if (this.value().value === this.value().max) {
            clearInterval(this.timer());
            this.timer.set(undefined);
          }
        }, 500)
      );
    } else {
      clearInterval(this.timer());
      this.timer.set(undefined);
    }
  }
  next() {
    this.value.set({ ...this.value(), value: this.value().max });
  }
  previous() {
    this.value.set({ ...this.value(), value: this.value().min });
  }
}
