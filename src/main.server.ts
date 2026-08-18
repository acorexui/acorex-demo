import './prerender-browser-stubs';
import { applyPrerenderBrowserStubs } from './prerender-browser-stubs';
import { provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) => {
  // Re-apply after Domino / platform-server may replace HTMLElement.
  applyPrerenderBrowserStubs();

  return bootstrapApplication(
    AppComponent,
    {
      ...config,
      providers: [provideZoneChangeDetection(), ...config.providers],
    },
    context,
  );
};

export default bootstrap;
