import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    return (
            <div className="col">
                <div className="card" style={{maxWidth:'10rem'}}>
                        <img src={`./assets/heroes/${id}.jpg`} className="card-img-top " alt="..."/>
                        <h5 className="card-header">{superhero}</h5>
                    <div className="card-body">
                        <p className="card-text">{alter_ego}</p>
                            {
                                (alter_ego !== characters)
                                && <p className='card-text'>{characters}</p>
                            }
                        <p className="text-muted">{first_appearance}</p>
                        <Link to={`./heroe/${id}`}>
                            Mas...
                        </Link>
                    </div>
                </div>
            </div>
    )
}
