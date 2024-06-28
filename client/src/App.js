// App.js
import React, {useEffect, useState} from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Blog from './components/Blog/Blog'
import ProjectCarousel from './components/ProjectCarousel/ProjectCarousel';
import './styles.css'; 

function App() {

  // Allow scroll to dynamic go to the correct sction

  const sectionIds = ['landing', 'projects', 'profile', 'blog', 'contact'];

  const [activeSection, setActiveSection] = useState(null);

  const handleScroll = (e) => {

    const delta = e.deltaY; // Positive for scrolling down, negative for scrolling up

    if (delta > 0) {
      // Scrolling down
      scrollToNextSection();
    } else {
      // Scrolling up
      scrollToPrevSection();
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.offsetTop;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const scrollToNextSection = () => {
    const currentIndex = sectionIds.indexOf(activeSection);
    const nextIndex = currentIndex + 1;
    const nextSectionId = sectionIds[nextIndex];
    if (nextSectionId) {
      scrollToSection(nextSectionId);
    }
  };

  const scrollToPrevSection = () => {
    const currentIndex = sectionIds.indexOf(activeSection);
    const prevIndex = currentIndex - 1;
    const prevSectionId = sectionIds[prevIndex];
    if (prevSectionId) {
      scrollToSection(prevSectionId);
    }
  };

  const handleDotClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  useEffect(() => { 
    


    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [activeSection, handleScroll]);

 

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


  // blog table to make sure the blog does not repeat its blogs, this is put here because the array would refesh in the blog component
  const [displayedPostUrls, setDisplayedPostUrls] = useState([]);

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>

      <body>
        <main>
          <div className="contentWrapper">
            <div id="landing" className={`section ${activeSection === 'landingSection' ? 'active' : ''}`}>
              <div className="separator-line"></div>
              <div className="landing-text">
                {/* Text content */}
                <h2>Hello!</h2>
                <p>Welcome to Frank's website!</p>
              </div>
            </div>

            <div id="projects" className={`section ${activeSection === 'projects' ? 'active' : ''}`}>
              <div className="project-section-title">Project Highlights</div>
              <ProjectCarousel></ProjectCarousel>
            </div> 

            <div id="profile" className={`section ${activeSection === 'profile' ? 'active' : ''}`}>
              <Profile></Profile>
            </div>

            <div id="blog" className={`section ${activeSection === 'blog' ? 'active' : ''}`}>
              <Blog displayedPostUrls={displayedPostUrls} setDisplayedPostUrls={setDisplayedPostUrls}/>
            </div>

            <div id="contact" className={`section ${activeSection === 'contact' ? 'active' : ''}`}>
              contact
            </div>

            <div className="navigation-indicator">
              {sectionIds.map((sectionId) => (
                <div
                  key={sectionId}
                  className={`dot ${sectionId === activeSection ? 'active-dot' : ''}`}
                  onClick={() => handleDotClick(sectionId)}
                ></div>
              ))}
            </div>

            <div class="cursor-light"></div>

            <script src='./components/LightScript.js'></script>
          </div>
        </main>
      </body>
    </html>
  );
}

export default App;