import { About } from "./components/About";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import { Projects } from "./components/Projects";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <About />
    </div>
  );
}
