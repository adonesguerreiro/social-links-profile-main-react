import "./App.css";
import avatar from "../src/assets/images/avatar-jessica.jpeg";

function App() {
	return (
		<main>
			<article className="social-card">
				<figure>
					<img
						src={avatar}
						alt="avatar-jessica"
					/>
				</figure>
				<div className="name-city-country">
					<h1>Jessica Randall</h1>
					<p>London, United Kingdom</p>
				</div>
				<div className="hard-skills">
					<p>&quot;Front-end developer and avid reader.&quot;</p>
				</div>
				<ul className="social-networks-buttons">
					<li>
						<a href="#">GitHub</a>
					</li>
					<li>
						<a href="#">Frontend Mentor</a>
					</li>
					<li>
						<a href="#">LinkedIn</a>
					</li>
					<li>
						<a href="#">Twitter</a>
					</li>
					<li>
						<a href="#">Instagram</a>
					</li>
				</ul>
			</article>
		</main>
	);
}

export default App;
