import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByIdPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroes=getHeroesByPublisher(publisher);

    return (
        <div className='row row-cols-1 row-cols-md-3 g-4 border-dark mb-3 animate__animated animate__bounceInLeft'>
            {
                heroes.map(hero=>(
                    <HeroCard key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    )
}
