import './css/Login.css';
import NavBar from '../components/NavBar';
import backgroundLogin from '../assets/svg/backgroundConnection4.svg';
import backgroundPerson from '../assets/poubelleBack.png';
import { useState } from 'react';
import { LoginForm } from '../components/LoginForm';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [username, setUsername] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleLogin = async (email: string, password: string) => {
		try {
			const response = await fetch('http://localhost:3000/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email, password })
			});
	
			if (response.ok) {
				const data = await response.json();
				console.log('Login successful:', data);
				setUsername(data.username);
				setIsLoggedIn(true);
			} else {
				const errorData = await response.json();
				throw new Error(errorData.error || 'Une erreur s\'est produite lors de la connexion.');
			}
		} catch (error) {
			console.error('Error logging in:', error);
			setError((error as Error).message); // Set the error message to display to the user
		}
	};	
	
	const emailRegex = new RegExp(
		/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
	);

	const handleClick = async () => {
		if (!emailRegex.test(email)) {
			setError('Email invalide.');
			return;
		} else if (password.length < 8) {
			setError('Mot de passe: min. 8 caractères.');
			return;
		}
	
		setIsLoading(true);
		try {
			await handleLogin(email, password);
			// If login is successful, redirect or perform other actions
		} catch (error) {
			// If an error occurs during login
			console.error('Error logging in:', error);
			setError('Une erreur s\'est produite lors de la connexion.'); // Set a generic error message
		} finally {
			setIsLoading(false);
		}
	};
	
	return (
		<>
			<NavBar />
			<div className="mainContainer p-md-5 p-4">
				{isLoggedIn ? (
					<div className="successMessage">
						<p>Login successful! Welcome, {username}.</p>
					</div>
				) : (
					<LoginForm
						email={email}
						setEmail={setEmail}
						password={password}
						setPassword={setPassword}
						error={error}
						handleClick={handleClick}
						isLoading={isLoading}
					/>
				)}
				<img
					src={backgroundLogin}
					width={1000}
					className="backgroundWave col-xl-7 col-md-8 col-12"
				/>
				<img
					src={backgroundPerson}
					width={1000}
					className="backgroundPerson col-xl-7 col-md-8 col-11"
				/>
			</div>
		</>
	);
}
