import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Certificate } from "./components/Certificate/Certificate";
import { Experience } from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certificate/>
      <Footer/>
      <Analytics />
    </div>
  );
}

export default App;
