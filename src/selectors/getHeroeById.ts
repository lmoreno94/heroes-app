import { heroes } from "../seed/heroes";

export const getHeroeById = (id: string) => {
    return heroes.find(hero => hero.id === id);
}