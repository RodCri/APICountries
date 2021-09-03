import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { Country, Currency, Language } from '../../model/api';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-detail-countrie',
  templateUrl: './detail-countrie.component.html',
  styleUrls: ['./detail-countrie.component.css']
})
export class DetailCountrieComponent implements OnInit {

  country$: Observable<Country>;
  borderCountries$: Observable<Country[]>;

  constructor(private countriService: CountriesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.country$ = this.countriService
      .getCountryByName(params.country).pipe(
        tap(
          (res) => console.log(res)
        ),
        mergeMap((res) =>{
          this.borderCountries$ = this.countriService.getCountriesByCodes(res.borders);
          return of(res);
        })
      );
    })
  }

  displayCurrencies(currencies: Currency[]){
    return currencies.map(currency => currency.name).join(', ');
  }

  displayLanguages(languages: Language[]){
    return languages.map(language => language.name).join(', ');
  }

}
