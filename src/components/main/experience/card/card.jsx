import start from "../../../../images/start.svg";
import "./card.css";
export default function Card({
	status,
	rating,
	image,
	count,
	price,
	describtion,
	type,
}) {
	return (
		<div className="card">
			<div className="card-image">
				<p>{status}</p>
				<img src={image} alt="experince" />
			</div>
			<div className="card-rating">
				<img src={start} alt="start" />
				<h2>{rating}</h2>
				<p>
					({count}
					).USA
				</p>
			</div>
			<p className="card-describtion">{describtion}</p>
			<p className="card-price">
				<b>From ${price}</b> /{type}
			</p>
		</div>
	);
}
