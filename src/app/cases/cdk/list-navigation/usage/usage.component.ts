import { Component } from '@angular/core';
import { AXListNavigationModule } from '@acorex/cdk/list-navigation';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXListNavigationModule, CommonModule],
})
export class UsageComponent {
  changeRoute(e: any) {
    console.log(e);
  }

  onPressEnterOrSpace(e: any) {
    console.log(e);
  }
}
