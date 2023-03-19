// Imports
import { type NextPage } from "next";
import Navbar from "~/components/Navbar/Navbar";

// Functions
const Home: NextPage = () => (
  <>
    <header className="min-h-[75vh] bg-gray-500">
      <Navbar />
    </header>
    <main>
      <div>Main</div>
    </main>
    <footer>
      <div>Footer</div>
    </footer>
  </>
);

// Exports
export default Home;
