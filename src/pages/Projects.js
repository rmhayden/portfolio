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

        return (

            <section className="page">

            <section className="container-grid">

                {projects.map((project) => {

                    return (

                        <div className="projects" key={projects.indexOf(project)}>


                        <div className="top-container">

                            <h1 className="project-name">{project.name}</h1>

                        </div>

                        <div className="middle-container">

                            <div className="image-text-container">

                             <img className="project-image" src={project.image} />
                          
                            <p className="project-description" >{project.description}.&nbsp;&nbsp;{project.role}&nbsp;&nbsp;{project.year}</p>
                            </div>
                        </div>

                        <div className="bottom-container">

                            <div className="project-buttons">

                                {project.git ? <a href={project.git} target="_blank">
                                    {project.git ? <button className="project-button">Github</button> : null}
                                </a>
                                    : null}

                                <a href={project.live} target="_blank">
                                    <button className="project-button">Live Site</button>
                                </a>

                            </div>
                        </div>

                        </div>
                    )
                })}
            </section>
            </section>
        )
    }

    return projects ? loaded() : <h3><br></br><br></br>Loading...</h3>;
}

export default Projects;