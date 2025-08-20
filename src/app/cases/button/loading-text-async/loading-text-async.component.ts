import { AXButtonComponent } from '@acorex/components/button';
import { AXLoadingComponent } from '@acorex/components/loading';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './loading-text-async.component.html',
  imports: [AXButtonComponent, AXLoadingComponent],
})
export class LoadingTextAsyncComponent {
  isLoading = signal(false);
  step = signal<'idle' | 'loading' | 'done'>('idle');

  buttonText = computed(() =>
    this.step() === 'idle'
      ? 'Create Server'
      : this.step() === 'loading'
      ? 'Creating…'
      : 'Created'
  );

  loadingText = computed(() =>
    this.step() === 'loading' ? 'Creating…' : this.buttonText()
  );

  isDisabled = computed(
    () => this.step() === 'loading' || this.step() === 'done'
  );

  start() {
    this.step.set('loading');
    this.isLoading.set(true);
    setTimeout(() => {
      this.step.set('done');
      this.isLoading.set(false);
    }, 1500);
  }

  restart() {
    this.step.set('idle');
  }
}
