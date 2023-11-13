import "./App.css";


// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route path="/portfolio/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
} 

export default App;