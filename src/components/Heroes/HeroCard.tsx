import { Link } from "react-router-dom";
import type { HeroOmitPublisher } from "../../types/Hero";

function HeroCard(props: HeroOmitPublisher) {
    const { id, superhero, alter_ego, characters, first_appearance } = props;
    
	return (
        <div className="col">
            <div className="card" style={{ maxWidth: '10rem' }}>
                <img src={`./assets/heroes/${id}.jpg`} className="card-img-top" alt={superhero} />
                <h5 className="card-header">{superhero}</h5>
                <div className="card-body">
                    <p className="card-text">{alter_ego}</p>
                    {alter_ego !== characters && <p className='card-text'>{characters}</p>}
                    <p className="text-muted">{first_appearance}</p>
                    <Link to={`./heroe/${id}`}>
                        Más...
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeroCard;
