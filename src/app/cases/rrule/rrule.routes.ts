import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'usage',
    pathMatch: 'full',
  },
  {
    path: 'usage',
    loadComponent: () =>
      import('./usage/usage.component').then((c) => c.UsageComponent),
  },
  {
    path: 'frequency-options',
    loadComponent: () =>
      import('./frequency-options/frequency-options.component').then(
        (c) => c.FrequencyOptionsComponent
      ),
  },
  {
    path: 'interval-count',
    loadComponent: () =>
      import('./interval-count/interval-count.component').then(
        (c) => c.IntervalCountComponent
      ),
  },
  {
    path: 'byweekday',
    loadComponent: () =>
      import('./byweekday/byweekday.component').then(
        (c) => c.ByWeekdayComponent
      ),
  },
  {
    path: 'bymonthday',
    loadComponent: () =>
      import('./bymonthday/bymonthday.component').then(
        (c) => c.ByMonthdayComponent
      ),
  },
  {
    path: 'until-date',
    loadComponent: () =>
      import('./until-date/until-date.component').then(
        (c) => c.UntilDateComponent
      ),
  },
  {
    path: 'complex-rules',
    loadComponent: () =>
      import('./complex-rules/complex-rules.component').then(
        (c) => c.ComplexRulesComponent
      ),
  },
];
