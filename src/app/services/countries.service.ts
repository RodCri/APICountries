import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../model/api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  URL: string;
  YOUR_ACCESS_KEY: string;

  constructor(private http: HttpClient) {
    this.URL = 'http://api.countrylayer.com/v2';
    this.YOUR_ACCESS_KEY = '9f019cff7c54f8bb7b70801fb2ed4840';
   }

  getAllCountries(){
    let headers = new HttpHeaders();
    headers = headers.set('YOUR_ACCESS_KEY', '9f019cff7c54f8bb7b70801fb2ed4840');
    return this.http.get<Country[]>(`${this.URL}/all?access_key=${this.YOUR_ACCESS_KEY}`);
  }

  getCountryByName(name: string){
    return this.http.get<Country[]>(`${this.URL}/name/${name}`).pipe(
      map(([res])=>res));
  }

  getCountriesByCodes(codes: string[]){
    return this.http.get<Country[]>(`${this.URL}/alpha?codes=${codes.join(';')}`);
  }
}
