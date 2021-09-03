import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../model/api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  URL: string;

  constructor(private http: HttpClient) {
    this.URL = 'https://restcountries.eu/rest/v2';
   }

  getAllCountries(){
    return this.http.get<Country[]>(`${this.URL}/all`);
  }

  getCountryByName(name: string){
    return this.http.get<Country[]>(`${this.URL}/name/${name}`).pipe(
      map(([res])=>res));
  }

  getCountriesByCodes(codes: string[]){
    return this.http.get<Country[]>(`${this.URL}/alpha?codes=${codes.join(';')}`);
  }
}
