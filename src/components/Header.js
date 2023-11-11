import { Link } from "react-router-dom";

function Header() {

  //an example of an inline style for the nav tag for an initial layout - later additions, or 

  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    borderBottom: ".01rem solid var(--lightest-color)",
    // padding: ".5rem",
    width: "100%",
    margin: "auto",
    fontSize: "20px",
    backgroundColor: "var(--shadow-color)",
    position: "fixed",
    top: "0",
    overflow: "hidden",
    zIndex: "10"

  };



  return (
    <header>
  
      <nav style={navStyle}>
        <Link to="/">
          <button className="nav-button">H<small>OME</small></button>
        </Link>
        <Link to="/about">
          <button className="nav-button"><p className="nav-button-text">A<small>BOUT</small></p></button>
        </Link>
        <Link to="/projects">
          <button className="nav-button">P<small>ROJECTS</small></button>
        </Link>
      </nav>
      <hr></hr>
    </header>
  );
}

export default Header;