import React, { useContext } from "react";
import {
	Navigate,
	useParams,
	UNSAFE_NavigationContext,
} from "react-router-dom";
import { getHeroeById } from "../../selectors/getHeroeById";

function HeroScreen() {
    const navigator = useContext(UNSAFE_NavigationContext).navigator;
	const { heroeId } = useParams<{ heroeId: string }>();
	if (!heroeId) {
		return <Navigate to="/" />;
	}
	const hero = getHeroeById(heroeId);

	if (!hero) {
		return <Navigate to="/" />;
	}

	const handleReturn = () => {
		if (history.length <= 2) {
			history.push("/");
		} else {
			history.goBack();
		}
	};

	const { superhero, publisher, alter_ego, first_appearance, characters } =
		hero;

	return (
		<div className="card mb-3" style={{ maxWidth: "50rem" }}>
			<div className="row g-0">
				<div className="col-md-4">
					<img
						src={`../assets/heroes/${heroeId}.jpg`}
						className="img-fluid rounded-start animate__animated animate__jackInTheBox"
						alt={superhero}
					/>
				</div>
				<div className="col-md-8">
					<div className="card-body animate__animated animate__zoomIn">
						<h5 className="card-title fw-bold">{superhero}</h5>
						<p className="card-text">Alter ego: {alter_ego}</p>
						<p className="card-text">Publisher: {publisher}</p>
						<p className="card-text">First appearance: {first_appearance}</p>
						<p className="card-text">Characters: {characters}</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
						<button className="btn btn-outline-info" onClick={handleReturn}>
							Return
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroScreen;
