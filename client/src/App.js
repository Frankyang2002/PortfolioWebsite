// App.js
import React, {useEffect, useState} from 'react';
import './App.css';
import Blog from './components/Blog/Blog'
import ProjectCarousel from './components/ProjectCarousel/ProjectCarousel';
import TopNav from './components/TopNav/TopNav';



function App() {
  
 


  // Allow scroll to dynamic go to the correct sction

  const sectionIds  = ['landing', 'projects', 'blog', 'profile', 'contact', 'extra']; 

  const [activeSection, setActiveSection] = useState(null);


  // checking which section we are in
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const offset = 60;
    const newActiveSection = sectionIds.find((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop - offset;
        const sectionBottom = sectionTop + section.offsetHeight;
        return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
      }
      return false;
    });

    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection]);

  // handles side navigation colours and navigation
  const handleDotClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.offsetTop -60;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }
  };



  // Changing tab title and icon
  useEffect(() => {
    // Change the title dynamically
    document.title = 'Portfolio';

    // Set the favicon dynamically
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = 'templogo.jpg';
    document.head.appendChild(favicon);

    // Cleanup function (optional): Remove the dynamically added favicon on component unmount
    return () => {
      document.head.removeChild(favicon);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on component mount




  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>

      <body>
        <main>
          <header>
            <TopNav></TopNav>
          </header>
          <div className="contentWrapper">
            <div id="landing" className={`section ${activeSection === 'landingSection' ? 'active' : ''}`}>
              <div className="landing-image">
                {/* Big picture content */}
                <img src="Crow.jpg" alt="Crow" style={{ width: '100%', height: 'auto' }} />
              </div>
              <div className="separator-line"></div>
              <div className="landing-text">
                {/* Text content */}
                <h2>Welcome to my page</h2>
                <p>I have no idea what to say here</p>
              </div>
            </div>

            <div id="projects" className={`section ${activeSection === 'projects' ? 'active' : ''}`}>
              <div className="project-section-title">Projects</div>
              <ProjectCarousel></ProjectCarousel>
            </div>

            <div id="blog" className={`section ${activeSection === 'blog' ? 'active' : ''}`}>
              <Blog></Blog>
            </div>

            <div id="profile" className={`section ${activeSection === 'profile' ? 'active' : ''}`}>
              profile
            </div>

            <div id="contact" className={`section ${activeSection === 'contact' ? 'active' : ''}`}>
              contact
            </div>

            <div id="extra" className={`section ${activeSection === 'extra' ? 'active' : ''}`}>
              extra
            </div>

            <div className="navigation-indicator">
              {sectionIds.map((sectionId) => (
                <div
                  key={sectionId}
                  className={`dot ${sectionId === activeSection ? 'active' : ''}`}
                  onClick={() => handleDotClick(sectionId)}
                ></div>
              ))}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

export default App;