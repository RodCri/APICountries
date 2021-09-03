export interface Countrie{
    name: string;
    flag: string;
    population: number;
    region: string;
    capital: string;
    subregion: string;
    languages: Languages[];
    currencies: Currencies[];
    borders: string[];
}

export interface Languages{
    name: string;
    nativeName: string;
}

export interface Currencies{
    code: string;
    name: string;
    symbol: string;
}
