import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import Footer from "./components/footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
