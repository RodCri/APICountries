import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Theme{
  light = 'light',
  dark = 'dark'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private mode : BehaviorSubject<Theme> = new BehaviorSubject(Theme.light);

  constructor() { }

  get mode$(){
    return this.mode.asObservable();
  }

  toogleMode(){
    if(this.mode.getValue() === Theme.dark){
      this.mode.next(Theme.light)
    }else{
      this.mode.next(Theme.dark)
    }
  }
}
