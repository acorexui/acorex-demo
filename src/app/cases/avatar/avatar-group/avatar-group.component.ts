import {
  AXAvatarComponent,
  AXAvatarGroupComponent,
} from '@acorex/components/avatar';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'avatar-group.component.html',
  imports: [AXAvatarGroupComponent, AXAvatarComponent],
})
export class AvatarGroupComponent {}
