import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<>
			<nav className="navbar">
				<NavLink className="mytrash-logo" to="/">
					My Trash
				</NavLink>
				<div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
					<ul>
						<li>
							<NavLink className="nav-link" to="/" onClick={closeMobileMenu}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink className="nav-link" to="/Map" onClick={closeMobileMenu}>
								Map
							</NavLink>
						</li>
						<li>
							<NavLink
								className="nav-link"
								to="/Find"
								onClick={closeMobileMenu}
							>
								Find out more
							</NavLink>
						</li>
						<li>
							<NavLink
								className="nav-link"
								to="/login"
								onClick={closeMobileMenu}
							>
								Login
							</NavLink>
						</li>
						<li>
							<NavLink
								className="nav-link"
								to="/register"
								onClick={closeMobileMenu}
							>
								Register
							</NavLink>
						</li>
					</ul>
				</div>
				<img
					src="./src/assets/burger-menu.png"
					alt="burger-menu"
					className="burger-menu"
					onClick={toggleMobileMenu}
				/>
			</nav>
			<header></header>
		</>
	);
};

export default NavBar;
