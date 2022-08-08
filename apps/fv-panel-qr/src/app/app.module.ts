import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { NxWelcomeComponent } from './nx-welcome.component';
import { PortalModule, portalRoutes } from '@fv-playing-qr/portal';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PortalModule,
    RouterModule.forRoot([
      {
        path: '',
        children: portalRoutes
      }
    ],
      {
        initialNavigation: 'enabledBlocking'
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
