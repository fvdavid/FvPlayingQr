import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { QRCodeModule } from 'angularx-qrcode';
import { MaterialModule } from '@fv-playing-qr/material';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';

export const portalRoutes: Route[] = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    QRCodeModule,
    MaterialModule,
    ColorPickerModule
  ],
  declarations: [
    HomeComponent
  ],
})
export class PortalModule { }
