// Imports
import { type NextPage } from "next";
import Head from "next/head";
import Footer from "~/components/common/Footer/Footer";
import Navbar from "~/components/common/Navbar/Navbar";
import Hero from "~/components/sections/Hero/Hero";

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
    </main>
    <Footer />
  </>
);

// Exports
export default Home;
