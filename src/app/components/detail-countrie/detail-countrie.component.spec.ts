import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCountrieComponent } from './detail-countrie.component';

describe('DetailCountrieComponent', () => {
  let component: DetailCountrieComponent;
  let fixture: ComponentFixture<DetailCountrieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCountrieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCountrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
