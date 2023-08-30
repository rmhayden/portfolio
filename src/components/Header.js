import { Link } from "react-router-dom";

function Header() {

  //an example of an inline style for the nav tag for an initial layout - later additions, or 

  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    borderBottom: ".2rem solid black",
    // padding: ".5rem",
    width: "100%",
    margin: "auto",
    fontSize: "20px",
    backgroundColor: "#7fbbeb",
    cursor: "pointer",

    position: "fixed",
    top: "0",
    overflow: "hidden",

  };


  return (
    <header>
  
      <nav style={navStyle}>
        <Link to="/">
          <button className="nav-button">HOME</button>
        </Link>
        <Link to="/about">
          <button className="nav-button">ABOUT</button>
        </Link>
        <Link to="/projects">
          <button className="nav-button">PROJECTS</button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;