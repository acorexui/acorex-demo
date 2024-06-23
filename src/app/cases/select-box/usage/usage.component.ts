import { AXDataSource } from '@acorex/components/common';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXFormModule } from '@acorex/components/form';
import { AXSearchBoxModule } from '@acorex/components/search-box';
import { AXSelectBoxModule } from '@acorex/components/select-box';
import { AXTextBoxModule } from '@acorex/components/text-box';
import { Component } from '@angular/core';

@Component({
    standalone: true,
    templateUrl: 'usage.component.html',
    imports: [
        AXSelectBoxModule,
        AXFormModule,
        AXSearchBoxModule,
        AXTextBoxModule,
        AXDecoratorModule,
    ],
})
export class UsageComponent {
    itemsObjects = Array.from({ length: 100 }).map((_, i) => ({
        id: i,
        text: `Item #${i}`,
    }));

    protected dataSource = new AXDataSource<any>({
        pageSize: 10,
        key: 'id',
        load: (e) => {
            return new Promise((resolve) => {
                setTimeout(
                    () => {
                        const list = this.itemsObjects;
                        const result = e.filter
                            ? list.filter((item) =>
                                  item.text.includes(e.filter?.value as string),
                              )
                            : list;
                        resolve({
                            items: result.slice(e.skip, e.skip + e.take),
                            total: result.length,
                        });
                    },
                    e.skip == 0 ? 100 : 300,
                );
            });
        },
    });
}
