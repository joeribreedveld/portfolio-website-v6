// Imports
import Image from "next/image";

// Functions
const Hero = () => (
  <section className="relative flex h-full min-h-[60vh] flex-col justify-end bg-[#212529]">
    <div className="page-width z-10 flex flex-col gap-4 p-24">
      <h1 className="max-w-[30ch]">
        Passionate Frontend Developer Driven by Learning and Challenges
      </h1>
      <p className="max-w-[50ch] text-xs font-light text-[#E5E5E5]">
        I aim to create websites that are clean, well-organized, and provide an
        excellent user experience.
      </p>
    </div>
    <Image
      src="/img/hero-bg.jpg"
      alt="Hero image programming"
      className="object-cover opacity-50"
      fill
    />
  </section>
);

// Exports
export default Hero;
