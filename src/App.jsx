import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Hero,
  Navbar,
  About,
  Achievements,
  Stats,
  Experience,
  Projects,
  TechStack,
  Leadership,
  Expertise,
  Contact,
  BackgroundBeams,
  LearnHTML,
} from "./components";

const HomePage = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Stats />
      <Achievements />
      <Experience />
      <Projects />
      <TechStack />
      <Leadership />
      <Expertise />
      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/learn-html" 
          element={
            <>
              <Navbar />
              <LearnHTML />
            </>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

