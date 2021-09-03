import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';
import { DetailCountrieComponent } from './components/detail-countrie/detail-countrie.component';
import { NotpageComponent } from './components/notpage/notpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CountryCardComponent } from './components/country-card/country-card.component';


@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    DetailCountrieComponent,
    NotpageComponent,
    NavbarComponent,
    CountryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
