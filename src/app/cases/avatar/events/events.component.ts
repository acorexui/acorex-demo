import { AXAvatarComponent } from '@acorex/components/avatar';
import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { Component, signal } from '@angular/core';

type Color =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

@Component({
  templateUrl: 'events.component.html',
  imports: [AXAvatarComponent, AXButtonComponent, AXDecoratorGenericComponent],
})
export class EventsComponent {
  color = signal<Color>('default');
  size = signal<number>(48);
  logs = signal<string[]>([]);

  private push(message: string) {
    this.logs.update((prev) => [message, ...prev].slice(0, 6));
  }

  cycleColor() {
    const variants: Color[] = [
      'default',
      'primary',
      'secondary',
      'success',
      'warning',
      'danger',
    ];
    const index = variants.indexOf(this.color());
    this.color.set(variants[(index + 1) % variants.length]);
  }

  inc() {
    this.size.set(this.size() + 8);
  }
  dec() {
    this.size.set(Math.max(24, this.size() - 8));
  }

  onColorChange(v: Event) {
    this.push(`colorChange: ${v}`);
  }
  onSizeChange(v: number) {
    this.push(`sizeChange: ${v}`);
  }
  onOptionChanged($event: any) {
    this.push(`onOptionChanged: ${$event?.name} -> ${$event?.newValue}`);
  }
}
