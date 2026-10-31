import {
  AXButtonGroupComponent,
  AXButtonGroupItemComponent,
} from '@acorex/components/button-group';
import { AXOtpComponent } from '@acorex/components/otp';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type SeparatorDemoMode = 'groupSize' | 'groups' | 'after';

@Component({
  templateUrl: 'separator.component.html',
  imports: [
    FormsModule,
    AXOtpComponent,
    AXButtonGroupComponent,
    AXButtonGroupItemComponent,
  ],
})
export class SeparatorComponent {
  protected readonly otpValue = signal('');

  protected readonly mode = signal<SeparatorDemoMode>('groupSize');

  protected readonly modes = [
    {
      value: 'groupSize' as const,
      label: 'Group size',
      description:
        'Equal chunks with separator and separatorGroupSize (for example 2 → 12-34-56).',
    },
    {
      value: 'groups' as const,
      label: 'Groups',
      description:
        'Custom chunk sizes with separatorGroups (for example [3, 3] on length 6).',
    },
    {
      value: 'after' as const,
      label: 'After indices',
      description:
        'Exact positions with separatorAfter (zero-based indices after which the separator appears).',
    },
  ];

  protected readonly modeDescription = computed(
    () => this.modes.find((m) => m.value === this.mode())?.description ?? '',
  );

  protected setMode(next: SeparatorDemoMode): void {
    this.mode.set(next);
    this.otpValue.set('');
  }
}
