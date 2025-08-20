import {
  AXBreadCrumbsComponent,
  AXBreadCrumbsItemComponent,
} from '@acorex/components/breadcrumbs';
import { AXButtonComponent } from '@acorex/components/button';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

type Crumb = { label: string; url?: string; active: boolean };

@Component({
  templateUrl: 'dynamic-async.component.html',
  imports: [
    AXBreadCrumbsComponent,
    AXBreadCrumbsItemComponent,
    RouterLink,
    AXButtonComponent,
  ],
})
export class DynamicAsyncComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  readonly segments = signal<string[]>([]);
  readonly crumbs = computed<Crumb[]>(() => {
    const parts = this.segments();
    const acc: Crumb[] = [];
    let path = '';
    parts.forEach((p, i) => {
      path += `/${p}`;
      acc.push({
        label: decodeURIComponent(p),
        url: i < parts.length - 1 ? path : undefined,
        active: i === parts.length - 1,
      });
    });
    return acc.length ? acc : [{ label: 'Home', url: '/', active: true }];
  });

  constructor() {
    this.restart();
  }

  restart(): void {
    this.segments.set([]);
    // Simulate async fetch of current URL path (e.g., after data load)
    setTimeout(() => {
      const url = this.router.url.replace(/^\//, '');
      this.segments.set(url ? url.split('/') : ['home']);
    }, 1000);
  }
}
