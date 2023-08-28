import { useState, useEffect } from "react";

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {

		//make api call and get response
    const response = await fetch("./projects.json");

		// turn response into javascript object
    const data = await response.json();

		// set the projects state to the data
    setProjects(data);

  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => { getProjectsData() }, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects.map((project) => (

      <div className="projects" key={projects.indexOf(project)}>

        <h1>{project.name}</h1>

       <div className="project-buttons">

        <a href={project.git}>
          <button className="project-button">Github</button>
        </a>

        <a href={project.live}>
          <button className="project-button">Live Site</button>
        </a>

        </div>


        <img className="project-image" src={project.image} />

      </div>
    ));
  };


  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;