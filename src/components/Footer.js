function Footer(props) {



    const navStyle = {
        display: "flex",
        justifyContent: "space-evenly",
        borderTop: ".2rem solid black",
        width: "100%",
        margin: "auto",
        fontSize: "20px",
        backgroundColor: "#7fbbeb",
        cursor: "pointer",
    
        position: "fixed",
        bottom: "0",
        overflow: "hidden",
    
      };



    return  (
    
    
    
    <nav style={navStyle}>
    
    {<p>RobsContent.com</p>}
        {<p>|</p>}
        {<p>&#169; 2023</p>}
        {<p>|</p>}
        {<p>Robert Hayden, MD</p>}
            
    
    </nav>
    )
  }
  
  export default Footer;