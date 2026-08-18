import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'showcase-selector', pathMatch: 'full' },
  {
    path: 'showcase-selector',
    loadComponent: () =>
      import('./showcase-selector/showcase-selector.component').then(
        (c) => c.ShowcaseSelectorComponent,
      ),
  },
  {
    path: 'contrast',
    loadComponent: () =>
      import('./contrast/contrast.component').then((c) => c.contrastComponent),
  },
  {
    path: 'overlay-context',
    loadComponent: () =>
      import('./overlay-context/overlay-context.component').then(
        (c) => c.OverlayContextComponent,
      ),
  },
  {
    path: 'activation-classes',
    loadComponent: () =>
      import('./activaion-classes/activation-classes.component').then(
        (c) => c.ActivationClassesComponent,
      ),
  },
  {
    path: 'flat-compability',
    loadComponent: () =>
      import('./flat-compability/flat-compability.component').then(
        (c) => c.FlatCompabilityComponent,
      ),
  },
  {
    path: 'visual-charecter',
    loadComponent: () =>
      import('./visual-charecter/visual-charecter.component').then(
        (c) => c.VisualCharecterComponent,
      ),
  },
  {
    path: 'semantic-roles',
    loadComponent: () =>
      import('./semantic-roles/semantic-roles.component').then(
        (c) => c.SemanticRolesComponent,
      ),
  },
];
