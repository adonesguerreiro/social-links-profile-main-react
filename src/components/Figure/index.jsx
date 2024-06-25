import avatar from "../../assets/images/avatar-jessica.jpeg";
import "./style.css";

export default function Figure() {
	return (
		<figure>
			<img
				src={avatar}
				alt="avatar-jessica"
			/>
		</figure>
	);
}
