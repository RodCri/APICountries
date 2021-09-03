export class Countrie{
    
    name: string;
    population: number;
    region: string;
    capital: string;
    
    constructor(pName: string, pPopulation: number, pRegion: string, pCapital: string){
        this.name = pName;
        this.population = pPopulation;
        this.region = pRegion;
        this.capital = pCapital;
    }
}