// Imports
import { type NextPage } from "next";
import Navbar from "~/components/common/Navbar/Navbar";
import Hero from "~/components/sections/Hero/Hero";

// Functions
const Home: NextPage = () => (
  <>
    <header className="absolute z-20 w-full">
      <Navbar />
    </header>
    <main className="min-h-screen">
      <Hero />
    </main>
    <footer>
      <div>Footer</div>
    </footer>
  </>
);

// Exports
export default Home;
