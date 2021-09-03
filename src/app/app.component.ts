import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountriesService } from './services/countries.service';
import { Theme, ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  theme: Observable<Theme>;

  constructor(private themeService: ThemeService, private countriesService: CountriesService){
  }

  ngOnInit(){
    this.theme = this.themeService.mode$;
    this.countriesService.getAllCountries().subscribe(res => console.log(res));
  }

  toggleTheme(){
    this.themeService.toogleMode();
  }
}
