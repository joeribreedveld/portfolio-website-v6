// Imports
import Link from "next/link";
import Image from "next/image";

// Functions
const Contact = () => (
  <section className="section-padding-y relative mb-24 bg-[url(/img/contact-bg.jpg)] bg-cover bg-center">
    <div className="page-width flex flex-col gap-12">
      <section className="flex flex-col items-center gap-4">
        <h2 className="font-bold text-[#FEFEFE]">Reach out to me</h2>
        <p className="text-xs font-light text-[#E5E5E5]">
          Feel free to contact me if you have any questions.
        </p>
      </section>
      <ul className="flex flex-col items-center gap-4">
        <li>
          <p className="text-xs font-medium text-[#FEFEFE]">
            joeri.breedveld123@gmail.com
          </p>
        </li>
        <li>
          <Link
            href="https://github.com/joeribreedveld"
            rel="noopener noreferrer"
            target="_blank"
            className="text-xs font-medium text-[#FEFEFE]"
          >
            GitHub - @joeribreedveld
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/joeribreedveld"
            rel="noopener noreferrer"
            target="_blank"
            className="text-xs font-medium text-[#FEFEFE]"
          >
            LinkedIn - @joeribreedveld
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/joeri.bv"
            rel="noopener noreferrer"
            target="_blank"
            className="text-xs font-medium text-[#FEFEFE]"
          >
            Instagram - @joeri.bv
          </Link>
        </li>
        <li>
          <p className="text-xs font-medium text-[#FEFEFE]">+31 68 005 60 04</p>
        </li>
      </ul>
    </div>
  </section>
);
// Exports
export default Contact;
