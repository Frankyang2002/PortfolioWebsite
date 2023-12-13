import React from 'react';
import './TopNav.css';

const TopNav = () => {
    // using href to jump to correct section
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
        const yOffset = -60; // Adjust this value based on your fixed header height
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };


    return (
        <div>
            <div className="logo">
                <img src='templogo.jpg' alt="logo" width="30" height="30"></img>
            </div>
            <nav>
                <ul>
                <li><button onClick={() => scrollToSection('landing')}>landing</button></li>
                <li><button onClick={() => scrollToSection('projects')}>projects</button></li>
                <li><button onClick={() => scrollToSection('blog')}>blog</button></li>
                <li><button onClick={() => scrollToSection('profile')}>profile</button></li>
                <li><button onClick={() => scrollToSection('contact')}>contact</button></li>
                <li><button onClick={() => scrollToSection('extra')}>extra</button></li>
                </ul>
            </nav>    
        </div>
    )
}

export default TopNav