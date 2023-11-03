import hero from "../../../../images/hero.svg";
import "./hero-images.css";

export default function HeroImages() {
	return (
		<div className="hero-images-container">
			<img src={hero} alt="hero" />
		</div>
	);
}
