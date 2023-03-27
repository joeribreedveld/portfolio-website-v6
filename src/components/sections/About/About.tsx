// Imports
import Image from "next/image";

// Functions
const About = () => (
  <section className="relative flex flex-col bg-[#212529] md:flex-row">
    <section className="section-padding-y page-width min-w-screen flex flex-col gap-12">
      <h2 className="font-bold text-[#E5E5E5]">Get to know me</h2>
      <p className="text-xs font-light text-[#E5E5E5] md:max-w-[50%] md:pr-16 xl:pr-32">
        Hello, my name is Joeri Breedveld. I am 18 years old and live in
        Amsterdam. I have been programming since 2021 and am studying Software
        Development at Mediacollege Amsterdam. In my free time, I work on small
        projects a lot. I also follow many tutorials on YouTube and learn more
        about programming. I am a persevering person; I keep searching until I
        find the solution and I make time every day to learn something new. I
        also work very structured.
      </p>
    </section>
    <div className="relative h-[20rem] md:absolute md:min-h-full md:w-full md:max-w-[50vw] md:translate-x-full">
      <Image
        src="/img/about.jpg"
        alt="Contact background image programming"
        className="top-0 left-0 h-[20rem] w-full transform object-cover opacity-50"
        fill
      />
    </div>
  </section>
);

// Exports
export default About;
