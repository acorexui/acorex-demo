import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
const loadingElement = document.querySelector('.app-loading') as HTMLDivElement;

bootstrapApplication(AppComponent, appConfig);
