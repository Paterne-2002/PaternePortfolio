import Navbar from "./components/Navbar";
import Home   from "./sections/Home";
import About  from "./sections/About";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Projet from "./sections/Projet";
import "./styles/variables.css";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projet />
      <Contact />
    </>
  );
}

export default App;
