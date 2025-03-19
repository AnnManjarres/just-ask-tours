import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initializeApp } from "firebase/app";

import { environment } from './environments/environment';

bootstrapApplication(AppComponent, appConfig)
  .then(() => initializeApp(environment.firebaseConfig))
  .catch((err) => console.error(err));
