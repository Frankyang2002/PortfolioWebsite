// App.js
import React, {useEffect} from 'react';
import './App.css';

function App() {
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
            <div className="logo">
                testing
            </div>
            <nav>
              <ul>
                <li><a href="#profile">Profile</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </nav>
          </header>
          <div className="contentWrapper">
            <div className="section landingSection">
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
            <div className="section projectsSection">
              project
            </div>
            <div className="section blogSection">
              blog
            </div>
            <div className="section contactSection">
              contact
            </div>
            <div className="section secretSection">
              secret
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

export default App;