import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './css/Home.css'; // Importez le fichier CSS


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
                <NavLink className="makeit-logo" to="/">Make It</NavLink>
                <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
                    <ul>
                        <li><NavLink className="nav-link" to="/" onClick={closeMobileMenu}>Home</NavLink></li>
                        <li><NavLink className="nav-link" to="/makeit" onClick={closeMobileMenu}>MakeIt</NavLink></li>
                        <li><NavLink className="nav-link" to="/contact" onClick={closeMobileMenu}>Contact</NavLink></li>
                        <li><NavLink className="nav-link" to="/logincreate" onClick={closeMobileMenu}>Login/Create</NavLink></li>
                    </ul>
                </div>
                <img src="./src/assets/burger-menu.png" alt="burger-menu" className="burger-menu" onClick={toggleMobileMenu} />
            </nav>
            <header></header>

            {/* <router-view></router-view> */}
        </>
    );
};

export default NavBar;
