import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXFormModule } from '@acorex/components/form';
import { AXSearchBoxModule } from '@acorex/components/search-box';
import { AXSelectBoxModule } from '@acorex/components/select-box';
import { AXTextBoxModule } from '@acorex/components/text-box';
import { Component, inject, signal } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AXDataSource } from '@acorex/components/common';
import { firstValueFrom } from 'rxjs';

@Component({
    templateUrl: 'api-call.component.html',
    imports: [
        AXSelectBoxModule,
        AXFormModule,
        AXSearchBoxModule,
        AXTextBoxModule,
        AXDecoratorModule,
        HttpClientModule,
        FormsModule,
    ]
})
export class ApiCallComponent {
  protected http = inject(HttpClient);

  //You can pass an object to set the initial value.
  protected options = signal({
    placeholder: 'Select Names...',
    value: '',
  });

  protected dataSource = new AXDataSource<{ id: number; text: string }>({
    pageSize: 10,
    key: 'id',
    load: async (e) => {
      //This method is called when the user clicks to see all users in the list.
      const result: any = await this.callApi();
      return {
        total: result.length,
        items: result,
      };
    },
    byKey: async (key) => {
      //This method is called on initialization to set the initial select box value.
      const result: any = await this.callApi();
      return result[0];
    },
  });

  protected callApi() {
    return firstValueFrom(
      this.http.get('https://jsonplaceholder.typicode.com/users')
    );
  }
}
