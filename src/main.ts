import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
const loadingElement = document.querySelector('.app-loading') as HTMLDivElement;

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    setTimeout(() => loadingElement.remove(), 500);
  })
  .catch((err) => console.error(err));
