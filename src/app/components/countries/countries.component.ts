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

  searchFilter: string;
  source: Country[];

  constructor(private countrieService: CountriesService) {
    
   }

  ngOnInit(): void {
    this.countrieService.getAllCountries().subscribe(countries=>{
      this.source = countries;
    })
  }

  get countries(){
    return this.source
      ? this.source.filter((country) =>
        this.searchFilter 
          ? country.name
            .toLowerCase()
            .includes(this.searchFilter.toLowerCase()) 
          : country
      )
    : this.source
  }

}
