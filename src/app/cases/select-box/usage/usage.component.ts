import { AXDataSource } from '@acorex/cdk/common';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXFormModule } from '@acorex/components/form';
import { AXSearchBoxModule } from '@acorex/components/search-box';
import { AXSelectBoxModule } from '@acorex/components/select-box';
import { AXTextBoxModule } from '@acorex/components/text-box';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../select-box.service';

@Component({
  templateUrl: 'usage.component.html',
  imports: [
    AXSelectBoxModule,
    AXFormModule,
    AXSearchBoxModule,
    AXTextBoxModule,
    AXDecoratorModule,
    FormsModule,
  ],
})
export class UsageComponent {
  apiService = inject(DataService);

  protected dataSource = new AXDataSource<any>({
    pageSize: 10,
    key: 'id',
    load: async (e) => {
      const items = await this.apiService.getData();
      return {
        items,
        total: items.length,
      };
    },
  });
}
