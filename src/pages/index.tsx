// Imports
import { type NextPage } from "next";
import Head from "next/head";
import Footer from "~/components/common/Footer/Footer";
import Navbar from "~/components/common/Navbar/Navbar";
import About from "~/components/sections/About/About";
import Contact from "~/components/sections/Contact/Contact";
import Hero from "~/components/sections/Hero/Hero";
import Projects from "~/components/sections/Projects/Projects";
import Education from "~/components/sections/Education/Education";
import Services from "~/components/sections/Services/Services";
import Interests from "~/components/sections/Interests/Interests";
import Career from "~/components/sections/Career/Career";

// Functions
const Home: NextPage = () => (
  <>
    <Head>
      <title>Joeri Breedveld</title>
    </Head>
    <header className="absolute z-20 w-full">
      <Navbar />
    </header>
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <About />
      <Education />
      <Career />
      <Interests />
      <Contact />
      <Services />
    </main>
    <Footer />
  </>
);

// Exports
export default Home;
