import Experience from "./experience/experience";
import Hero from "./hero/hero";
import "./main.css";
export default function Main() {
	return (
		<main className="main">
			<Hero />
			<Experience />
		</main>
	);
}
