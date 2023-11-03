import HeroImages from "./hero-images/hero-images";
import HeroTitle from "./hero-title/hero-title";
import "./hero.css";
export default function Hero() {
	return (
		<div className="hero">
			<HeroImages />
			<HeroTitle />
		</div>
	);
}
