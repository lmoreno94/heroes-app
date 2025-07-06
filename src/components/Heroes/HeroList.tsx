import type { Hero, HeroPublisher } from "../../types/Hero";
import HeroCard from "./HeroCard";
import { getHeroesByPublisher } from "../../selectors/getHeroesByIdPublisher";

function HeroList(props: HeroPublisher) {
    const { publisher } = props;
    const heroes: Hero[] = getHeroesByPublisher(publisher);

    return (
        <div className='row row-cols-1 row-cols-md-3 g-4 border-dark mb-3 animate__animated animate__bounceInLeft'>
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} {...hero} />
                ))
            }
        </div>
    );
}

export default HeroList;
