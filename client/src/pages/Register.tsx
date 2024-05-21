import NavBar from '../components/NavBar';
import './css/Register.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png';

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
			<div className="register-container d-flex justify-content-center align-items-center vh-100">
				<div className="register-card" style={{ borderRadius: '15px' }}>
					<div className="card-body mt-1">
						<div className="w-100 d-flex justify-content-center align-items-center">
							<img src={logo} alt="logo" className="logo" />
						</div>
						<h5 className="card-title text-center">
							<strong>Créer un compte myTrash</strong>
						</h5>
						<div className="mt-2 text-center">
							<p>
								Déjà un compte?{' '}
								<a href="/login" className="connect">
									Connectez-vous
								</a>
							</p>
							<p className="mb-1">Saisissez vos informations</p>
						</div>
						<form
							className="d-flex flex-column align-items-center justify-content-center"
							onSubmit={register}
						>
							{/* input username */}
							<div className="mb-1 m-auto position-relative">
								<label className="ms-1" htmlFor="username">
									Username
								</label>
								<input
									type="text"
									id="username"
									className="form-control"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									required
								/>
							</div>
							{/* input email */}
							<div className="mb-1 m-auto position-relative">
								<label className="ms-1" htmlFor="email">
									Email
								</label>
								<input
									type="email"
									id="email"
									className="form-control"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
							{/* input password */}
							<div className="mb-1 m-auto position-relative">
								<label className="ms-1" htmlFor="password">
									Password
								</label>
								<input
									type="password"
									id="password"
									className="form-control"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
							</div>
							<div className="d-flex justify-content-end mt-3 me-3">
								<button type="submit" className="btn btn-primary">
									<strong>Register</strong>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
