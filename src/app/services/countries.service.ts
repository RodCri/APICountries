import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Countrie } from '../models/countrie.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  URL: string;

  constructor(private http: HttpClient) {
    this.URL = 'https://restcountries.eu/rest/v2/all';
   }

  getAllCountries(): Promise<Countrie[]>{
    return this.http.get<Countrie[]>(this.URL).toPromise();
  }
}
