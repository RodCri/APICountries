import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../model/api.d';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  arrCountries$: Observable<Country[]>;

  constructor(private countrieService: CountriesService) {
    
   }

  ngOnInit(): void {
    this.arrCountries$ = this.countrieService.getAllCountries();
    
  }

}
