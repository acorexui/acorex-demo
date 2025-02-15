import { Component } from '@angular/core';
import { AXResultModule } from '@acorex/components/result';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXQueryBuilderModule } from '@acorex/components/query-builder';

@Component({
  templateUrl: './usage.component.html',
  imports: [AXResultModule, AXDecoratorModule, AXQueryBuilderModule],
})
export class UsageComponent {
  protected inputData = [
    { field: 'EmployeeID', label: 'Employee ID', type: 'number' },
    { field: 'FirstName', label: 'First Name', type: 'string' },
    {
      field: 'TitleOfCourtesy',
      label: 'Title Of Courtesy',
      type: 'boolean',
      values: ['Mr.', 'Mrs.'],
    },
    { field: 'Title', label: 'Title', type: 'string' },
    {
      field: 'HireDate',
      label: 'Hire Date',
      type: 'date',
      format: 'dd/MM/yyyy',
    },
    { field: 'Country', label: 'Country', type: 'string' },
    { field: 'City', label: 'City', type: 'string' },
  ];

  protected data = [
    {
      id: Math.random(),
      condition: 'and',
      rules: [
        {
          id: Math.random(),
        },
      ],
    },
  ];

  protected changeHandler(e: any[]) {
    console.log(e);
  }
}
