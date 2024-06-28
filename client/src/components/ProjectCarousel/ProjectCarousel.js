import React, { useState } from 'react';
import './ProjectCarousel.css';

const projectData = [
        { id: 1, image: 'templogo.jpg' , name: 'Project Portfolio', description: 'Status: Currently working on it :)' },
        { id: 2, image: 'Crow.jpg' , name: 'Project 2', description: 'Description for Project 2' },
        { id: 3, image: 'favicon.ico' , name: 'Project 3', description: 'Description for Project 3' },
        // Add more projects as needed
    ];

const ProjectCarousel = () => {
    // For project click left and right
    const [selectedProject, setSelectedProject] = useState(projectData[0]);

    const [projectIndex, setProjectIndex] = useState(0);

    // Project section stuff
    const handlePrevProject = () => {
        const currentIndex = projectData.findIndex((project) => project === selectedProject);
        const prevIndex = (currentIndex - 1 + projectData.length) % projectData.length;
        setSelectedProject(projectData[prevIndex]);
        setProjectIndex(prevIndex);
    };

    const handleNextProject = () => {
        const currentIndex = projectData.findIndex((project) => project === selectedProject);
        const nextIndex = (currentIndex + 1) % projectData.length;
        setSelectedProject(projectData[nextIndex]);
        setProjectIndex(nextIndex);
    };

    
    return (
        <div className='project-carousel'>
            {/* Faded previous project */}
            {(
                <div className="project-fade project-previous">
                <img src={projectData[(projectIndex - 1 + projectData.length) % projectData.length].image} alt="Previous Project" style={{width:'300px', height: '300px'}}/>
                </div>
            )} 
            

            <button className="button-wrapper carousel-button" onClick={handlePrevProject}>&lt;</button>
            <div className="project-current selected-project">
                <img src={selectedProject.image} alt="Currproject" style={{width:'300px', height: '300px'}} className='curr-project-frame'/>
                <div className="project-current selected-project-text">
                <h3>{selectedProject.name}</h3>
                <p>{selectedProject.description}</p>
                </div>
                
            </div>
            <button className="button-wrapper carousel-button right-carousel-button" onClick={handleNextProject}>&gt;</button>

            {/* Faded next project */}
            {(
                <div className="project-fade project-next">
                <img src={projectData[(projectIndex + 1) % projectData.length].image} alt="Next Project" style={{width:'300px', height: '300px'}}/>
                </div>
            )}        
        </div>
        
    )
    
}

export default ProjectCarousel