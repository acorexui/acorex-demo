import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AXBadgeModule } from '@acorex/components/badge';
import {
  AXDataTableModule,
  AXRowCommandItem,
} from '@acorex/components/data-table';
import { AXDataSource } from '@acorex/components/common';

@Component({
  templateUrl: './cell-template.component.html',
  standalone: true,
  imports: [CommonModule, AXBadgeModule, AXDataTableModule],
})
export class CellTemplateComponent {
  protected _options = {
    disabled: false,
    readonly: false,
    itemHeight: 40,
    showHeader: true,
    fixedHeader: true,
    showFooter: true,
    alternative: false,
    fixedFooter: true,
    loading: {
      enabled: true,
      animation: true,
    },
  };

  protected result = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    firstName: `first name ${i}`,
    lastName: `last name ${i}`,
    email: `email-${i}@gmail.com`,
    mobile: `+98233765${i}`,
    country: 'USA',
    city: 'LA',
    price: (i + 10) * 1000,
    street: `No.${i + 1}`,
    status: i % 2 == 0 ? 'Active' : 'Deactive',
  }));

  protected dataSourceForEmpty = new AXDataSource<any>({
    pageSize: 20,
    key: 'id',
    load: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            items: [],
            total: 0,
          });
        }, 1000);
      });
    },
    byKey: (key) => {
      return Promise.resolve(this.result.find((c) => c.id == key));
    },
  });

  protected dataSource = new AXDataSource<any>({
    pageSize: 20,
    key: 'id',
    load: (e) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            items: this.result.slice(e.skip, (e.skip ?? 0) + (e.take ?? 0)),
            total: this.result.length,
          });
        }, 1000);
      });
    },
    byKey: (key) => {
      return Promise.resolve(this.result.find((c) => c.id == key));
    },
  });

  protected getSum(data: any) {
    let sum = 0;
    data.rows.forEach((item: any) => {
      sum += item.price;
    });
    return sum;
  }

  protected dropdownRowItems: AXRowCommandItem[] = [
    {
      text: 'Edit',
      icon: 'fa-solid fa-floppy-disk',
      name: 'edit',
      divided: true,
    },
    {
      text: 'Delete',
      icon: 'fa-solid fa-trash-can',
      name: 'delete',
      color: 'danger',
    },
  ];

  protected inlineRowItems: AXRowCommandItem[] = [
    {
      text: 'View',
      icon: 'fa-solid  fa-eye',
      name: 'view',
      divided: true,
    },
  ];
}
