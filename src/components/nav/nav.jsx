import logo from "../../images/logo.png";
import "./nav.css";
export default function Nav() {
	return (
		<nav className="nav">
			<img className="nav-image" src={logo} alt="logo" />
		</nav>
	);
}
