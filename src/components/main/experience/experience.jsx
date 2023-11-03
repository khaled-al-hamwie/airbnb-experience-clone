import pic1 from "../../../images/experince/pic-1.svg";
import pic2 from "../../../images/experince/pic-2.svg";
import pic3 from "../../../images/experince/pic-3.svg";
import Card from "./card/card";
import "./experience.css";
export default function Experience() {
	const experiences = [
		{
			status: "sold out",
			rating: 5.0,
			image: pic1,
			count: 6,
			price: 137,
			describtion: "Life lessons with Katie Zaferes",
			type: "person",
		},
		{
			status: "online",
			rating: 5.0,
			image: pic2,
			count: 30,
			price: 124,
			describtion: "Learn wedding photography",
			type: "person",
		},
		{
			status: "sold out",
			rating: 3.7,
			image: pic3,
			count: 2,
			price: 5,
			describtion: "Group Mountain Biking",
			type: "person",
		},
	];
	return (
		<div className="experiences-section">
			{experiences.map((experience, i) => (
				<Card
					status={experience.status}
					count={experience.count}
					describtion={experience.describtion}
					image={experience.image}
					price={experience.price}
					rating={experience.rating}
					type={experience.type}
					key={i}
				/>
			))}
		</div>
	);
}
