function Footer(props) {



    const navStyle = {
        display: "flex",
        justifyContent: "space-evenly",
        borderTop: ".01rem solid var(--lightest-color)",
        width: "100%",
        margin: "auto",
        fontSize: "14px",
        opacity: "1",
        padding: "0.5rem",
        backgroundColor: "var(--shadow-color)",
        position: "fixed",
        bottom: "0",
        overflow: "hidden",
        zIndex: "9",
    
      };



    return  (
    
    
    
    <nav style={navStyle}>
    
    {<p>Med Primers LLC</p>}
        {<p>|</p>}
        {<p>Robert Hayden, MD</p>}
        {<p>|</p>}
        {<p>MedPrimers.com &#169; 2021</p>}
            
    
    </nav>
    )
  }
  
  export default Footer;