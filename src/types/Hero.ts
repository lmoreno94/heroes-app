export interface Hero {
    id: string;
    superhero:string; 
    publisher:string; 
    alter_ego:string;
    first_appearance:string;
    characters: string;
}

export type HeroOmitPublisher = Omit<Hero, 'publisher'>;
export type HeroPublisher = Pick<Hero, 'publisher'>;