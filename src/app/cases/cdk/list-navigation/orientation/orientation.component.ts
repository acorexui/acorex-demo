import { AXListNavigationModule } from '@acorex/cdk/list-navigation';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'orientation.component.html',
  imports: [AXListNavigationModule, CommonModule],
})
export class OrientationComponent {}
