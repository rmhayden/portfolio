import { useState, useEffect } from "react";

function About() {
  // create state to hold about data
  const [about, setAbout] = useState(null);

  // create function to make api call
  const getAboutData = async () => {

		// make api call and get response
    const response = await fetch("./about.json");

		// turn response into javascript object
    const data = await response.json();

		// set the about state to the data
    setAbout(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => { getAboutData() } , []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div>
      <img className="headshot-image" src={about.headshot} />
      <h2>{about.name}</h2>
      <br></br>
      <p className="bio-description">{about.bio}</p>
      <br></br>
      <h4>{about.email}</h4>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return (

  <section className="page">
  
  { about ? loaded() : <h1>Loading...</h1> }

    </section>
  )
}

export default About;