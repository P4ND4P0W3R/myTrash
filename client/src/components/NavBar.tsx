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
                <NavLink className="mytrash-logo" to="/">My Tash</NavLink>
                <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
                    <ul>
                        <li><NavLink className="nav-link" to="/" onClick={closeMobileMenu}>Home</NavLink></li>
                        <li><NavLink className="nav-link" to="/Map" onClick={closeMobileMenu}>Map</NavLink></li>
                        <li><NavLink className="nav-link" to="/Findoutmore" onClick={closeMobileMenu}>Find out more</NavLink></li>
                        <li><NavLink className="nav-link" to="/login" onClick={closeMobileMenu}>Login</NavLink></li>
                        <li><NavLink className="nav-link" to="/create" onClick={closeMobileMenu}>Create</NavLink></li>
                    </ul>
                </div>
                <img src="./src/assets/burger-menu.png" alt="burger-menu" className="burger-menu" onClick={toggleMobileMenu} />
            </nav>
            <header></header>

        </>
    );
};

export default NavBar;
