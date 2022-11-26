import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './pages/home/header/header.component';
import { MostSearchedComponent } from './pages/home/most-searched/most-searched.component';
import { WhyACatComponent } from './pages/home/why-acat/why-acat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MostSearchedComponent,
    WhyACatComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
