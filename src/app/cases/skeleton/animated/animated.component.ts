import { Component } from '@angular/core';
import { AXSkeletonModule } from '@acorex/components/skeleton';

@Component({
  standalone: true,
  templateUrl: './animated.component.html',
  imports: [AXSkeletonModule],
})
export class AnimatedComponent {}
