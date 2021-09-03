import { Component, OnInit } from '@angular/core';
import { Countrie } from 'src/app/models/countrie.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  arrCountries: Countrie[];

  constructor(private countrieService: CountriesService) {
    this.arrCountries = [];
   }

  ngOnInit(): void {
    this.countrieService.getAllCountries()
      .then(countries=> this.arrCountries = countries)
      .catch(error => console.log(error));
  }

}
