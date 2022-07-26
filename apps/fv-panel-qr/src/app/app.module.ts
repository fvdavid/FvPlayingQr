import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { PortalModule, portalRoutes } from '@fv-playing-qr/portal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        children: portalRoutes
      }
    ],
      { initialNavigation: 'enabledBlocking' }),
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
