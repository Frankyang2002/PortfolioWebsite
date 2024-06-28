import React from 'react';
import './TopNav.css';

const TopNav = (props) => {
    const {activeSection } = props

    
    // using href to jump to correct section
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId)
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
                <li><button onClick={() => scrollToSection('landing')} className={`${'landing' === activeSection ? 'active-button' : ''}`}>landing</button></li>
                <li><button onClick={() => scrollToSection('profile')} className={`${'profile' === activeSection ? 'active-button' : ''}`}>profile</button></li>
                <li><button onClick={() => scrollToSection('blog')} className={`${'blog' === activeSection ? 'active-button' : ''}`}>blog</button></li>
                <li><button onClick={() => scrollToSection('projects')} className={`${'projects' === activeSection ? 'active-button' : ''}`}>projects</button></li>
                <li><button onClick={() => scrollToSection('contact')} className={`${'contact' === activeSection ? 'active-button' : ''}`}>contact</button></li>
                <li><button onClick={() => scrollToSection('extra')} className={`${'extra' === activeSection ? 'active-button' : ''}`}>extra</button></li>
                </ul>
            </nav>    
        </div>
    )
}

export default TopNav