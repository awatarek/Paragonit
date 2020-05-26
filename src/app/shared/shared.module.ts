import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent, ContentContainerComponent, FooterContainerComponent } from './base-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderContainerComponent,
    ContentContainerComponent,
    FooterContainerComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    RouterModule
  ],
  exports: [
    HeaderContainerComponent,
    ContentContainerComponent,
    FooterContainerComponent
  ]
})
export class SharedModule { }
