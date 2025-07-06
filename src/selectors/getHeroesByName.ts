import { heroes } from "../seed/heroes";
import type { Hero } from "../types/Hero";

export const getHeroesByName = (name: string = ''): Array<Hero> => {
    if (name === '') {
        return [];
    }

    name = name.toLocaleLowerCase();
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));
}