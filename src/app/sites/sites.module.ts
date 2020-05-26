import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq';
import { LandingComponent } from './landing';
import { LoginComponent } from './login';
import { SharedModule } from '../shared';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    FaqComponent,
    LandingComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    FaqComponent,
    LandingComponent,
    LoginComponent
  ]
})
export class SitesModule { }
