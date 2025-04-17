import React from 'react';
import './Header.css';

function Header() {
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header>
            <h1>Lynn Dugger Direct Health Management</h1>
            <nav>
                <a onClick={() => handleScroll('welcome')}>Welcome</a>
                <a onClick={() => handleScroll('about')}>About</a>
                <a onClick={() => handleScroll('products')}>Products & Services</a>
                <a onClick={() => handleScroll('recommendations')}>Recommendations</a>
                <a onClick={() => handleScroll('owner')}>Owner Profile</a>
                <a onClick={() => handleScroll('contact')} className="contact-button">Contact Us</a>
            </nav>
        </header>
    );
}

export default Header;
