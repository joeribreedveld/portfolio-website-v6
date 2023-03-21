// Imports
import Link from "next/link";
import Image from "next/image";

// Functions
const Contact = () => (
  <section className="section-padding-y relative mb-32 bg-[#343A40]">
    <div className="absolute top-0 z-0 h-full w-full opacity-50">
      <Image
        src="/img/contact-bg.jpg"
        alt="Placeholder image"
        className="object-cover"
        fill
      />
    </div>
    <div className="page-width relative z-20 flex flex-col gap-12">
      <section className="flex flex-col items-center gap-4">
        <h2 className="font-bold text-[#FEFEFE]">Contact</h2>
        <p className="text-xs font-light text-[#E5E5E5]">
          Feel free to reach out if you have any questions.
        </p>
      </section>
      <ul className="flex flex-col items-center gap-4">
        <li>
          <p className="text-xs font-medium text-[#FEFEFE]">
            joeri.breedveld123@gmail.com
          </p>
        </li>
        <li>
          <Link href="/" className="text-xs font-medium text-[#FEFEFE]">
            GitHub - @joeribreedveld
          </Link>
        </li>
        <li>
          <Link href="/" className="text-xs font-medium text-[#FEFEFE]">
            LinkedIn - @joeribreedveld
          </Link>
        </li>
        <li>
          <Link href="/" className="text-xs font-medium text-[#FEFEFE]">
            Instagram - @joeri.bv
          </Link>
        </li>
        <li>
          <Link href="/" className="text-xs font-medium text-[#FEFEFE]">
            +31 68 005 60 04
          </Link>
        </li>
      </ul>
    </div>
  </section>
);
// Exports
export default Contact;
