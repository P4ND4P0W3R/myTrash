import './css/Home.css';
import NavBar from '../components/NavBar';
import LogoImage from '../assets/logo.png';
import BD1 from '../assets/BD1.jpeg';
import BD2 from '../assets/BD2.png';
import Arrow from '../assets/flèche.png';
import { NavLink } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<NavBar />
			<div className="landing-page">
				<div className="logo-container">
					<img src={LogoImage} alt="Logo" className="logo-image" />
					<h1 className="mytrash-logo">My Trash</h1>
				</div>
				<p className="catch-phrase">For a cleaner future</p>
				<div className="description-box">
					<p className="description">
						Have you ever noticed trashcans that are never emptied?
						<br />
						You'd like to notify your local garbage collectors of their
						existence to stop that awful stench but don't know how to?
						<br />
						Well, MyTrash is here for you.
						<br />
						MyTrash is an application that allows you to easily signal any
						overflowing trashcans that you may encounter during your travels
						through a city.
						<br />
						This way, garbage collectors will know which sector has been
						neglected.
					</p>
				</div>
				<NavLink to="/map" className="get-started-btn">
					Get Started
				</NavLink>
				<div className="image-container">
					<img src={BD1} alt="Image 1" className="image" />
					<img src={Arrow} alt="Image 2" className="image" />
					<img src={BD2} alt="Image 3" className="image" />
				</div>
			</div>
		</>
	);
};

export default Home;
