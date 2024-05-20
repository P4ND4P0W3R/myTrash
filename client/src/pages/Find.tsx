import './css/Find.css';
import NavBar from '../components/NavBar';

const Find = () => {
	return (
		<>
			<NavBar />
			<div className="division">
				<h1>Find Out More</h1>
				<p>
					Welcome to our website!<br></br> Our platform, My Trash, empowers
					communities to efficiently manage waste by reporting the status of
					trash bins - whether they are empty, full, or damaged. This
					information helps waste collectors locate and prioritize bins that
					need attention.
				</p>
				<p>
					Our platform was developed with the goal of promoting environmental
					sustainability and improving waste management practices. By utilizing
					crowdsourced data, we aim to streamline the process of waste
					collection and contribute to cleaner and healthier communities.
				</p>
				<p>
					My Trash was created by a team of passionate individuals committed to
					making a positive impact: Eyfeline Tala, Nathan Krief, Louis Fabre,
					Ali Nahas, and Paul Hu.
				</p>
				<p>
					Join us in our mission to create a greener and more sustainable future
					by cliquing here !
				</p>
				<button
					onClick={() => (window.location.href = '/register')}
					className="register_boutton"
				>
					Register
				</button>
			</div>
		</>
	);
};

export default Find;
