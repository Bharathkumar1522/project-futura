import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = (id) => {
        setIsOpen(false); // Close mobile menu after clicking
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <a href="#" className="navbar-logo">Futura</a>
                
                {/* Hamburger Icon */}
                <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Menu */}
                <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
                    <li><a href="#Home" onClick={() => handleScroll('Home')}>Home</a></li>
                    <li><a href="#About" onClick={() => handleScroll('About')}>About</a></li>
                    <li><a href="#Demo" onClick={() => handleScroll('Demo')}>Demo</a></li>
                    <li><a href="#Contact" onClick={() => handleScroll('Contact')}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;