import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXFormModule } from '@acorex/components/form';
import { AXSearchBoxModule } from '@acorex/components/search-box';
import { AXSelectBoxModule } from '@acorex/components/select-box';
import { AXTextBoxModule } from '@acorex/components/text-box';
import { Component, inject, signal } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AXDataSource } from '@acorex/cdk/common';
import { firstValueFrom } from 'rxjs';
import { AXLabelModule } from '@acorex/components/label';

@Component({
  templateUrl: 'api-call.component.html',
  imports: [
    AXSelectBoxModule,
    AXFormModule,
    AXSearchBoxModule,
    AXTextBoxModule,
    AXDecoratorModule,
    FormsModule,
    AXLabelModule,
  ],
})
export class ApiCallComponent {
  protected http = inject(HttpClient);

  //You can pass an object to set the initial value.
  protected options = signal({
    value: '',
  });

  protected dataSource = new AXDataSource<{ id: number; text: string }>({
    pageSize: 10,
    key: 'id',
    load: async (e) => {
      //This method is called when the user clicks to see all users in the list.
      const result: any = await this.callApi(e);
      return {
        total: result.total,
        items: result.comments,
      };
    },
    byKey: async (key) => {
      //This method is called on initialization to set the initial select box value.
      const result: any = await this.callApi({ take: 10, skip: 0 });
      return result[0];
    },
  });

  protected callApi(e: any) {
    return firstValueFrom(
      this.http.get(
        `https://dummyjson.com/comments?limit=${e.take}&skip=${e.skip}&select=body,postId`
      )
    );
  }
}
