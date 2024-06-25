import "./style.css";

export default function Ul() {
	const listData = [
		{ href: "#", text: "GitHub" },
		{ href: "#", text: "Frontend Mentor" },
		{ href: "#", text: "LinkedIn" },
		{ href: "#", text: "Twitter" },
		{ href: "#", text: "Instagram" },
	];

	return (
		<ul className="social-networks-buttons">
			{listData.map((item, index) => (
				<li key={index}>
					<a href={item.href}>{item.text}</a>
				</li>
			))}
		</ul>
	);
}
