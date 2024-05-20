import NavBar from '../components/NavBar';

import { useEffect, useState } from 'react';
import axios from 'axios';

const Register = () => {
	const [username, setUsername] = useState('admin');
	const [email, setEmail] = useState('admin@example.com');
	const [password, setPassword] = useState('admin');

	useEffect(() => {
		document.title = 'Register';
	}, []);

	const register = async (event: { preventDefault: () => void }) => {
		event.preventDefault();
		try {
			await axios.post('http://localhost:3000/register', {
				email,
				password,
				username,
			});

			alert('Registered successfully');

			// Handle the response as needed
		} catch (error) {
			console.error('Error fetching data:', error);
			alert('Failed to register');
		}
	};

	return (
		<>
			<NavBar />
			<div className="form-container">
				<h1>Register</h1>
				<form onSubmit={register}>
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>

					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>

					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>

					<button type="submit">Register</button>
				</form>
			</div>
		</>
	);
};

export default Register;
