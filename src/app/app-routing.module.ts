import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';
import { DetailCountrieComponent } from './components/detail-countrie/detail-countrie.component';
import { NotpageComponent } from './components/notpage/notpage.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: CountriesComponent},
  {path: 'listCountries', component: CountriesComponent},
  {path: 'Detail/:name', component: DetailCountrieComponent},
  {path: '**', component: NotpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
