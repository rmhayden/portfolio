
import { useState, useEffect } from "react";

function Home() {
  // create state to hold about data
  const [home, setHome] = useState(null);

  // create function to make api call
  const getHomeData = async () => {

		// make api call and get response
    const response = await fetch("./home.json");

		// turn response into javascript object
    const data = await response.json();

		// set the about state to the data
    setHome(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => { getHomeData() } , []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (

    <section className="page">

    <div>
      <h2>Med Primers LLC</h2>
    </div>
    </section>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return home ? loaded() : <h3><br></br><br></br>Loading...</h3>;
}


export default Home;


